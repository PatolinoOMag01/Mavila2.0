import "../styles/ColorSection.css";

export default function ColorSection() {

  const colors = [

    {
      image: "/mv01-black-white.png",
      color: "PRETO / BRANCO"
    },

    {
      image: "/mv01-white-black.png",
      color: "BRANCO / PRETO"
    },

    {
      image: "/mv01-blue.png",
      color: "PRETO / AZUL"
    },

    {
      image: "/mv01-green.png",
      color: "PRETO / VERDE"
    },

    {
      image: "/mv01-gray.png",
      color: "CINZA / PRATA"
    }

  ];


  return (

    <section className="colors-section">

      <h1>ESCOLHA SUA COR</h1>

      <div className="colors-container">

        {colors.map((item, index) => (

          <div className="color-card" key={index}>

            <img src={item.image} />

            <h2>{item.color}</h2>

          </div>

        ))}

      </div>

    </section>

  );

}