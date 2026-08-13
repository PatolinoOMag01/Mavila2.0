import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <h1>MAVILA</h1>

          <p>
            Street Luxury.<br/>
            Feita para se destacar.
          </p>

        </div>

        <div className="footer-column">

          <h3>Produtos</h3>

          <a href="#">Tênis</a>
          <a href="#">Roupas</a>
          <a href="#">Acessórios</a>

        </div>

        <div className="footer-column">

          <h3>Suporte</h3>

          <a href="#">Contato</a>
          <a href="#">Trocas e devoluções</a>
          <a href="#">FAQ</a>

        </div>

        <div className="footer-column">

          <h3>Institucional</h3>

          <a href="#">Sobre</a>
          <a href="#">Privacidade</a>
          <a href="#">Termos de uso</a>

        </div>

        <div className="footer-column">

          <h3>Redes Sociais</h3>

          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 MAVILA — FEITA PARA SE DESTACAR.
        </p>

      </div>

    </footer>
  );
}
