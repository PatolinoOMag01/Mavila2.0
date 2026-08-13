import { Link } from "react-router-dom";
import "../styles/RelatedProducts.css";

export default function RelatedProducts() {
  const products = [
    {
      name: "MV-02",
      price: "R$ 949,90",
      image: "/mv02.png",
      link: "/mv01"
    },
    {
      name: "MV-03",
      price: "R$ 999,90",
      image: "/mv03.png",
      link: "/mv01"
    },
    {
      name: "MV-04",
      price: "R$ 1.099,90",
      image: "/mv04.png",
      link: "/mv01"
    }
  ];

  return (
    <section className="related">
      <div className="related-header">
        <span>RECOMENDADOS</span>
        <h2>Você também pode gostar</h2>
      </div>

      <div className="related-grid">
        {products.map((product, index) => (
          <div
            className="related-card"
            key={index}
          >
            <div className="related-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="related-content">
              <h3>{product.name}</h3>

              <p>{product.price}</p>

              <Link to={product.link}>
                <button>
                  Ver Produto
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}