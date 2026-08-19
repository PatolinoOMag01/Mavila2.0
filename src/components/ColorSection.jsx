import { Link } from "react-router-dom";
import "../styles/ColorSection.css";

export default function ColorSection() {
  const base = import.meta.env.BASE_URL;

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

  const handleWheel = (e) => {
    const container = e.currentTarget;

    e.preventDefault();

    container.scrollLeft += e.deltaY;
  };

  return (
    <section className="colors-section">
      <h1>ESCOLHA SUA COR</h1>

      <div
        className="colors-container"
        onWheel={handleWheel}
      >
        {colors.map((item) => (
          <Link
            to={`/mv01?cor=${item.slug}`}
            className="color-card"
            key={item.slug}
            aria-label={`Ver MV-01 na cor ${item.color}`}
          >
            <img
              src={item.image}
              alt={`MAVILA ${item.color}`}
            />

            <h2>{item.color}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}