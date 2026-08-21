import { Link } from "react-router-dom";

import FadeImage from "./FadeImage";
import Reveal from "./Reveal";

import "../styles/RelatedProducts.css";

export default function RelatedProducts() {
  const base = import.meta.env.BASE_URL;

  const products = [
    {
      name: "MV-02",
      description: "Urban Motion",
      price: "R$ 949,90",
      image: `${base}mv02.png`,
      link: "/mv01?cor=saphire",
    },
    {
      name: "MV-03",
      description: "Future Flow",
      price: "R$ 999,90",
      image: `${base}mv03.png`,
      link: "/mv01?cor=allucard",
    },
    {
      name: "MV-04",
      description: "Urban Nature",
      price: "R$ 1.099,90",
      image: `${base}mv04.png`,
      link: "/mv01?cor=musgo",
    },
  ];

  return (
    <section className="related">

      <Reveal>
        <div className="related-header">
          <span>RECOMENDADOS</span>

          <h2>Você também pode gostar</h2>

          <p>
            Explore outras interpretações da identidade Mavila.
          </p>
        </div>
      </Reveal>

      <div className="related-grid">

        {products.map((product, index) => (
          <Reveal
            key={product.name}
            delay={index * 0.1}
            y={35}
            className="related-reveal"
          >
            <article className="related-card">

              <Link
                to={product.link}
                className="related-image-link"
              >
                <div className="related-image">
                  <FadeImage
                    src={product.image}
                    alt={`Tênis Mavila ${product.name}`}
                  />
                </div>
              </Link>

              <div className="related-content">

                <span className="related-category">
                  MAVILA
                </span>

                <h3>{product.name}</h3>

                <p className="related-description">
                  {product.description}
                </p>

                <strong className="related-price">
                  {product.price}
                </strong>

                <Link
                  to={product.link}
                  className="related-button"
                >
                  Ver Produto
                </Link>

              </div>

            </article>
          </Reveal>
        ))}

      </div>

    </section>
  );
}