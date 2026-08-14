import "../styles/Discover.css";

export default function Discover() {

  return (

    <section className="discover">

      <div className="discover-left">

        <h1>MV-01</h1>

        <h2>
          Mais que um tênis.<br />
          Uma afirmação.
        </h2>

        <p>
          Design autoral. Conforto premium.
          Presença única.
          Criado para quem nasceu para se destacar.
        </p>

        <button>
          Comprar Agora
        </button>

      </div>

      <div className="discover-right">

        <img src={`${import.meta.env.BASE_URL}mv01.png`} />

      </div>

    </section>

  );
}