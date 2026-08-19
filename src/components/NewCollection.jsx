import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/NewCollection.css";

export default function NewCollection() {
  const base = import.meta.env.BASE_URL;

  const products = [
    {
      name: "MV-01",
      description: "Street Luxury",
      image: `${base}mv01.png`,
      link: "/mv01",
    },
    {
      name: "MV-02",
      description: "Urban Motion",
      image: `${base}mv02.png`,
      link: "/mv01",
    },
    {
      name: "MV-03",
      description: "Future Flow",
      image: `${base}mv03.png`,
      link: "/mv01",
    },
  ];

  return (
    <section className="collection" id="collection">
      <div className="collection-header">
        <span>NOVA ERA MAVILA</span>

        <h1>NOVA COLEÇÃO</h1>

        <p>
          Design premium, conforto absoluto e identidade urbana.
        </p>
      </div>

      <div className="cards">
        {products.map((item, index) => (
          <motion.div
            className="card"
            key={item.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="card-content">
              <h2>{item.name}</h2>

              <p>{item.description}</p>

              <Link to={item.link}>
                <button>
                  Ver Produto
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}