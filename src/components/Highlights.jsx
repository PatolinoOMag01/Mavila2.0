import { Link } from "react-router-dom";

import Reveal from "./Reveal";

import "../styles/Highlights.css";

export default function Highlights() {
  const base = import.meta.env.BASE_URL;

  const highlights = [
    {
      className: "card card1",
      title: "MV-01",
      description: "Street Luxury",
      image: `${base}mv01-banner.jpg`,
      link: "/mv01",
      button: "Comprar",
    },
    {
      className: "card card2",
      title: "Essentials",
      description: "Roupas Mavila",
      image: `${base}clothes-banner.jpg`,
      link: "/",
      button: "Explorar",
    },
    {
      className: "card card3",
      title: "Signature",
      description: "Bonés & Acessórios",
      image: `${base}accessories-banner.jpg`,
      link: "/",
      button: "Comprar",
    },
  ];

  return (
    <section className="highlights">

      <Reveal>
        <div className="highlights-header">
          <span>SELEÇÃO MAVILA</span>

          <h1>DESTAQUES MAVILA</h1>
        </div>
      </Reveal>

      <div className="highlights-grid">

        {highlights.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.12}
            y={40}
            className={
              index === 0
                ? "highlight-reveal highlight-reveal-main"
                : "highlight-reveal"
            }
          >
            <div
              className={item.className}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="highlight-overlay">

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <Link
                  to={item.link}
                  className="highlight-button"
                >
                  {item.button}
                </Link>

              </div>
            </div>
          </Reveal>
        ))}

      </div>

    </section>
  );
}