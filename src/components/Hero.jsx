import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            NOVA COLEÇÃO 2026
          </span>

          <h1>
            MAVILA
            <br />
            MV-01
          </h1>

          <p>
            Criado para quem não segue tendências.
            Criado para quem cria tendências.
          </p>

          <div className="hero-buttons">
            <Link to="/mv01" className="btn-primary">
              Comprar Agora
            </Link>

            <a href="#collection" className="btn-secondary">
              Explorar
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/mv01.png"
            alt="Tênis MV-01"
          />
        </motion.div>

      </div>
    </section>
  );
}