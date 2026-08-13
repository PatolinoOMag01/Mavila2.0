import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="profile-page">
      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h1>Matheus</h1>

        <p>Membro MV Club</p>

        <div className="profile-actions">

          <Link to="/favorites">
            <button>
              ❤️ Favoritos
            </button>
          </Link>

          <Link to="/checkout">
            <button>
              🛒 Pedidos
            </button>
          </Link>

          <button>
            ⚙️ Configurações
          </button>

        </div>

      </div>
    </section>
  );
}