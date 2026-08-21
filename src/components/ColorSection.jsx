import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Reveal from "./Reveal";
import "../styles/ColorSection.css";

export default function ColorSection() {
  const base = import.meta.env.BASE_URL;
  const containerRef = useRef(null);

  const colors = [
    {
      image: `${base}mv01.png`,
      color: "PRETO CARBONO",
      slug: "preto",
    },
    {
      image: `${base}mv02.png`,
      color: "SAPHIRE",
      slug: "saphire",
    },
    {
      image: `${base}mv03.png`,
      color: "ALLUCARD",
      slug: "allucard",
    },
    {
      image: `${base}mv04.png`,
      color: "MUSGO",
      slug: "musgo",
    },
    {
      image: `${base}mv05.png`,
      color: "SILVER",
      slug: "silver",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleWheel = (event) => {
      // impede a página de subir/descer
      event.preventDefault();
      event.stopPropagation();

      // transforma scroll vertical em horizontal
      const movement =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      container.scrollLeft += movement;
    };

    container.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
        capture: true,
      }
    );

    return () => {
      container.removeEventListener(
        "wheel",
        handleWheel,
        {
          capture: true,
        }
      );
    };
  }, []);

  return (
    <section className="colors-section">
      <Reveal>
        <h1>ESCOLHA SUA COR</h1>
      </Reveal>

      <div
        ref={containerRef}
        className="colors-container"
      >
        {colors.map((item, index) => (
          <Reveal
            key={item.slug}
            delay={index * 0.08}
          >
            <Link
              to={`/mv01?cor=${item.slug}`}
              className="color-card"
              aria-label={`Ver MV-01 na cor ${item.color}`}
            >
              <img
                src={item.image}
                alt={`MAVILA ${item.color}`}
                loading="lazy"
              />

              <h2>{item.color}</h2>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}