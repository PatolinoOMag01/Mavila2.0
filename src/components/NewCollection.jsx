import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/NewCollection.css";

export default function NewCollection() {
  const base = import.meta.env.BASE_URL;

  const products = [
    {
      name: "MV-01",
      description: "Conceito • Preto Carbono",
      image: `${base}mv01.png`,
      link: "/mv01?cor=preto",
    },
    {
      name: "MV-01 / SAPHIRE",
      description: "Conceito • Saphire",
      image: `${base}mv02.png`,
      link: "/mv01?cor=saphire",
    },
    {
      name: "MV-01 / ALLUCARD",
      description: "Conceito • Allucard",
      image: `${base}mv03.png`,
      link: "/mv01?cor=allucard",
    },
  ];

  return (
    <section className="collection" id="collection">
      <div className="collection-header">
        <span>NOVA ERA MAVILA</span>

        <h1>PRIMEIROS CONCEITOS</h1>

        <p>
          Conheça as primeiras versões visuais do MV-01. Produto ainda em desenvolvimento.
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