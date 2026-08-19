import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

import "../styles/OrderConfirmed.css";

export default function OrderConfirmed() {
  return (
    <PageTransition>
      <div className="order-confirmed-page">
        <div className="order-confirmed-card">
          <div className="success-icon">
            ✓
          </div>

          <span className="order-tag">
            PEDIDO CONFIRMADO
          </span>

          <h1>Compra realizada com sucesso.</h1>

          <p>
            Seu pedido foi recebido e já está sendo preparado.
            Em breve você receberá novas atualizações.
          </p>

          <div className="order-info">
            <div>
              <span>Status</span>
              <strong>Confirmado</strong>
            </div>

            <div>
              <span>Pagamento</span>
              <strong>Aprovado</strong>
            </div>

            <div>
              <span>Entrega</span>
              <strong>Em preparação</strong>
            </div>
          </div>

          <div className="order-actions">
            <Link
              to="/"
              className="primary-action"
            >
              Voltar para Home
            </Link>

            <Link
              to="/mv01"
              className="secondary-action"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}