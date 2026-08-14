import "../styles/Experience.css";

export default function Experience() {

  return (

    <section className="experience">

      <div className="experience-left">

        <h1>
          FEITA PARA<br/>
          SE DESTACAR
        </h1>

        <p>
          Não seguimos tendências.
          Nós criamos identidade.
          A Mavila nasceu da união entre o luxo e o streetwear.
        </p>

        <button>
          Conheça a Mavila
        </button>

      </div>


      <div className="experience-right">

        <img src={`${import.meta.env.BASE_URL}mv01.png`} />

      </div>

    </section>

  );

}
