import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

export default function MVClub() {
  return <PageTransition>
    <SEO title="MV Club — Mavila" description="Acompanhe o desenvolvimento do primeiro sneaker da Mavila." />
    <section className="mvclub">
      <div className="mvclub-content">
        <span>MAVILA / FIRST DROP</span>
        <h1>MV CLUB</h1>
        <p>O MV-01 ainda está no papel, mas a história já começou. Acompanhe o caminho do conceito até o primeiro protótipo.</p>
        <div style={{textAlign:"left",maxWidth:560,margin:"0 auto 32px",lineHeight:2,color:"#bbb"}}>
          <p>01 — Conceito e cinco versões de cor: apresentados</p>
          <p>02 — Projeto técnico e escolha de materiais: próximos passos</p>
          <p>03 — Primeiro protótipo: ainda não produzido</p>
          <p>04 — Testes, ajustes e lançamento: datas a definir</p>
        </div>
        <p>O cadastro de membros e os benefícios exclusivos ainda estão em desenvolvimento. Não estamos recebendo pagamentos ou reservas.</p>
        <div className="mvclub-buttons"><Link className="static-cta" to="/mv01">Explorar MV-01</Link><Link className="static-cta" to="/">Voltar ao início</Link></div>
      </div>
    </section>
  </PageTransition>;
}
