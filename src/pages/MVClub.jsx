import { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { isEarlyAccessConfigured, joinEarlyAccess } from "../services/earlyAccess";

export default function MVClub() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const configured = isEarlyAccessConfigured();

  async function handleSubmit(event) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    try {
      await joinEarlyAccess({ email, consent });
      setStatus("Inscrição recebida! Você entrou na lista do MV Club.");
      setEmail("");
      setConsent(false);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setBusy(false);
    }
  }

  return <PageTransition>
    <SEO title="MV Club — MAVILA" description="Acompanhe a criação do primeiro sneaker da Mavila." />
    <section className="mvclub">
      <div className="mvclub-content">
        <span>MAVILA / FIRST DROP</span>
        <h1>MV CLUB</h1>
        <p>O MV-01 ainda está no papel. Acompanhe a jornada do conceito ao primeiro protótipo.</p>
        <div className="mv-roadmap">
          <p>01 — Conceito e cinco cores: apresentados</p>
          <p>02 — Projeto técnico e materiais: próximos passos</p>
          <p>03 — Primeiro protótipo: ainda não produzido</p>
          <p>04 — Testes e lançamento: datas a definir</p>
        </div>
        <h2>Faça parte do começo</h2>
        <p>Receba novidades sobre o desenvolvimento e os próximos passos do MV-01. Sem compras ou reservas antecipadas.</p>
        {configured ? <form onSubmit={handleSubmit} className="mv-signup">
          <label htmlFor="mv-email">Seu e-mail</label>
          <input id="mv-email" type="email" required maxLength={254} autoComplete="email" placeholder="voce@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          <label className="mv-consent"><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required /> Aceito receber e-mails sobre a Mavila e o MV-01. Poderei solicitar a exclusão dos meus dados.</label>
          <button type="submit" disabled={busy}>{busy ? "Enviando..." : "Entrar para o MV Club"}</button>
        </form> : <p role="status">Inscrições em preparação. Em breve você poderá participar.</p>}
        {status && <p role="status" aria-live="polite">{status}</p>}
        <div className="mvclub-buttons"><Link to="/mv01" className="static-cta">Explorar MV-01</Link></div>
      </div>
    </section>
  </PageTransition>;
}
