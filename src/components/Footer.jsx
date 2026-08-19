import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>MAVILA</h1>

          <p>
            Street Luxury.
            <br />
            Feita para se destacar.
          </p>
        </div>

        <div className="footer-column">
          <h3>Produtos</h3>

          <Link to="/mv01">Tênis</Link>
          <a href="#collection">Roupas</a>
          <a href="#collection">Acessórios</a>
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

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Pinterest
          </a>
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