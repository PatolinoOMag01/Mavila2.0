import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PageTransition from "../components/PageTransition";

import "../styles/Checkout.css";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <PageTransition>
      <div className="checkout-page">
        <div className="checkout-left">
          <h1>Finalizar Compra</h1>

          <input
            type="text"
            placeholder="Nome Completo"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="text"
            placeholder="CEP"
          />

          <input
            type="text"
            placeholder="Endereço"
          />

          <input
            type="text"
            placeholder="Número"
          />

          <input
            type="text"
            placeholder="Cidade"
          />

          <button>
            Finalizar Pedido
          </button>
        </div>

        <div className="checkout-right">
          <h2>Resumo do Pedido</h2>

          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>

              <span>
                R$ {item.price.toFixed(2)}
              </span>
            </div>
          ))}

          <h3>
            Total: R$ {total.toFixed(2)}
          </h3>
        </div>
      </div>
    </PageTransition>
  );
}