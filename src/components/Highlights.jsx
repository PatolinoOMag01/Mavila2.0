import "../styles/Highlights.css";

export default function Highlights() {

  return (

    <section className="highlights">

      <h1>DESTAQUES MAVILA</h1>

      <div className="grid">

        <div className="card card1">

          <div className="overlay">

            <h2>MV-01</h2>

            <p>Street Luxury</p>

            <button>Comprar</button>

          </div>

        </div>

        <div className="card card2">

          <div className="overlay">

            <h2>Essentials</h2>

            <p>Roupas Mavila</p>

            <button>Explorar</button>

          </div>

        </div>

        <div className="card card3">

          <div className="overlay">

            <h2>Signature</h2>

            <p>Bonés & Acessórios</p>

            <button>Comprar</button>

          </div>

        </div>

      </div>

    </section>

  );

}
