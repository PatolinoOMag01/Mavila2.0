import "../styles/CartDrawer.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartDrawer({
  isOpen,
  onClose,
}) {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) =>
      sum + (item.quantity || 1),
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * (item.quantity || 1),
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
          <div>
            <h2>Seu carrinho</h2>

            <span className="drawer-count">
              {totalItems}{" "}
              {totalItems === 1
                ? "item"
                : "itens"}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        <div className="drawer-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span>🛒</span>

              <h3>Seu carrinho está vazio</h3>

              <p>
                Escolha seu próximo MV e ele
                aparecerá aqui.
              </p>

              <Link
                to="/mv01"
                onClick={onClose}
              >
                Ver MV-01
              </Link>
            </div>
          ) : (
            cart.map((item, index) => {
              const quantity =
                item.quantity || 1;

              const subtotal =
                item.price * quantity;

              return (
                <div
                  className="drawer-item"
                  key={`${item.name}-${item.color}-${item.size}-${index}`}
                >
                  <div className="drawer-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="drawer-item-info">
                    <div className="drawer-item-top">
                      <div>
                        <h4>{item.name}</h4>

                        {item.color && (
                          <span>
                            {item.color}
                          </span>
                        )}

                        {item.size && (
                          <span>
                            Tamanho {item.size}
                          </span>
                        )}
                      </div>

                      <button
                        className="remove-item"
                        onClick={() =>
                          removeFromCart(index)
                        }
                        aria-label="Remover produto"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="drawer-item-bottom">
                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                          aria-label="Diminuir quantidade"
                        >
                          −
                        </button>

                        <span>
                          {quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(index)
                          }
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>

                      <strong>
                        R${" "}
                        {subtotal.toLocaleString(
                          "pt-BR",
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-total">
              <span>Total</span>

              <strong>
                R${" "}
                {total.toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </strong>
            </div>

            <p>
              Frete e descontos calculados no
              checkout.
            </p>

            <Link
              to="/checkout"
              onClick={onClose}
              className="checkout-link"
            >
              Finalizar Compra
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}