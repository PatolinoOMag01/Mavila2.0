import { Link } from "react-router-dom";
import FadeImage from "./FadeImage";
import Reveal from "./Reveal";

import "../styles/Discover.css";

export default function Discover() {
  return (
    <section className="discover">

      <Reveal
        className="discover-left"
        x={-40}
        y={0}
      >
        <span className="discover-tag">
          STREET LUXURY
        </span>

        <h1>MV-01</h1>

        <h2>
          Mais que um tênis.
          <br />
          Uma afirmação.
        </h2>

        <p>
          Design autoral. Conforto premium.
          Presença única. Criado para quem nasceu
          para se destacar.
        </p>

        <Link
          to="/mv01"
          className="discover-button"
        >
          Comprar Agora
        </Link>
      </Reveal>

      <Reveal
        className="discover-right"
        delay={0.15}
        x={40}
        y={0}
      >
        <FadeImage
          src={`${import.meta.env.BASE_URL}mv01.png`}
          alt="Tênis Mavila MV-01"
        />
      </Reveal>

    </section>
  );
}