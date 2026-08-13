import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartDrawer({
  isOpen,
  onClose,
}) {
  const {
    cart,
    removeFromCart
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <div
        className={`drawer-overlay ${
          isOpen ? "active" : ""
        }`}
        onClick={onClose}
      />

      <aside
        className={`cart-drawer ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="drawer-header">
          <h2>🛒 Carrinho</h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="drawer-items">
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cart.map((item, index) => (
              <div
                className="drawer-item"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>

                  <p>
                    R$ {item.price.toFixed(2)}
                  </p>

                  <small>
                    Tam. {item.size}
                  </small>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        <div className="drawer-footer">
          <h3>
            Total: R$ {total.toFixed(2)}
          </h3>

          <Link
            to="/checkout"
            onClick={onClose}
          >
            <button className="checkout-btn">
              Finalizar Compra
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}