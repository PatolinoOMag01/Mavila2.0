import { Link } from "react-router-dom";

export default function MVClub() {
  return (
    <section className="mvclub">
      <div className="mvclub-content">

        <span>EXCLUSIVO PARA MEMBROS</span>

        <h1>MV CLUB</h1>

        <p>
          Receba acesso antecipado a lançamentos,
          coleções limitadas e benefícios exclusivos
          da Mavila.
        </p>

        <div className="mvclub-buttons">
          <button>Entrar</button>
          <button className="secondary">
            Criar Conta
          </button>
        </div>

      </div>
    </section>
  );
}