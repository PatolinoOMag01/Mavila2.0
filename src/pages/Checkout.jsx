import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import PageTransition from "../components/PageTransition";

import "../styles/Checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [payment, setPayment] = useState("pix");

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  const total = subtotal + shipping - discount;

  function applyCoupon() {
    if (coupon.toUpperCase() === "MAVILA10") {
      setDiscount(subtotal * 0.1);

      alert("Cupom aplicado!");
      return;
    }

    setDiscount(0);

    alert("Cupom inválido.");
  }

  function handleFinishOrder() {
    if (cart.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    clearCart();

    navigate("/pedido-confirmado");
  }

  return (
    <PageTransition>
      <div className="checkout-page">

        <section className="checkout-left">

          <div className="checkout-header">
            <span>CHECKOUT</span>

            <h1>Finalizar Compra</h1>

            <p>
              Preencha seus dados para concluir
              seu pedido.
            </p>
          </div>

          <div className="checkout-section">
            <h2>Dados pessoais</h2>

            <div className="form-grid">
              <div className="form-group full">
                <label>Nome completo</label>

                <input
                  type="text"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group full">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="seuemail@email.com"
                />
              </div>

              <div className="form-group">
                <label>CPF</label>

                <input
                  type="text"
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="form-group">
                <label>Telefone</label>

                <input
                  type="text"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h2>Endereço</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>CEP</label>

                <input
                  type="text"
                  placeholder="00000-000"
                />
              </div>

              <div className="form-group">
                <label>Número</label>

                <input
                  type="text"
                  placeholder="123"
                />
              </div>

              <div className="form-group full">
                <label>Endereço</label>

                <input
                  type="text"
                  placeholder="Rua, avenida..."
                />
              </div>

              <div className="form-group">
                <label>Cidade</label>

                <input
                  type="text"
                  placeholder="Sua cidade"
                />
              </div>

              <div className="form-group">
                <label>Estado</label>

                <input
                  type="text"
                  placeholder="SP"
                />
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h2>Entrega</h2>

            <div className="shipping-options">

              <label
                className={`option-card ${
                  shipping === 0 ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === 0}
                  onChange={() => setShipping(0)}
                />

                <div>
                  <strong>Entrega padrão</strong>
                  <span>5 a 8 dias úteis</span>
                </div>

                <b>Grátis</b>
              </label>

              <label
                className={`option-card ${
                  shipping === 29.9
                    ? "selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === 29.9}
                  onChange={() =>
                    setShipping(29.9)
                  }
                />

                <div>
                  <strong>Entrega expressa</strong>
                  <span>1 a 3 dias úteis</span>
                </div>

                <b>R$ 29,90</b>
              </label>

            </div>
          </div>

          <div className="checkout-section">
            <h2>Pagamento</h2>

            <div className="payment-options">

              <button
                className={
                  payment === "pix"
                    ? "selected"
                    : ""
                }
                onClick={() => setPayment("pix")}
              >
                PIX
              </button>

              <button
                className={
                  payment === "card"
                    ? "selected"
                    : ""
                }
                onClick={() => setPayment("card")}
              >
                Cartão
              </button>

              <button
                className={
                  payment === "boleto"
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setPayment("boleto")
                }
              >
                Boleto
              </button>

            </div>

            {payment === "card" && (
              <div className="card-fields">

                <div className="form-group full">
                  <label>Número do cartão</label>

                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>

                <div className="form-group">
                  <label>Validade</label>

                  <input
                    type="text"
                    placeholder="MM/AA"
                  />
                </div>

                <div className="form-group">
                  <label>CVV</label>

                  <input
                    type="text"
                    placeholder="123"
                  />
                </div>

              </div>
            )}
          </div>

        </section>

        <aside className="checkout-right">

          <h2>Resumo do Pedido</h2>

          <div className="checkout-products">

            {cart.length === 0 ? (
              <p className="checkout-empty">
                Seu carrinho está vazio.
              </p>
            ) : (
              cart.map((item, index) => (
                <div
                  className="checkout-product"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="checkout-product-info">
                    <strong>{item.name}</strong>

                    {item.color && (
                      <span>{item.color}</span>
                    )}

                    {item.size && (
                      <span>
                        Tamanho {item.size}
                      </span>
                    )}

                    <span>
                      Quantidade:{" "}
                      {item.quantity || 1}
                    </span>
                  </div>

                  <strong>
                    R${" "}
                    {(
                      item.price *
                      (item.quantity || 1)
                    ).toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}
                  </strong>
                </div>
              ))
            )}

          </div>

          <div className="coupon">
            <input
              type="text"
              placeholder="Cupom de desconto"
              value={coupon}
              onChange={(e) =>
                setCoupon(e.target.value)
              }
            />

            <button onClick={applyCoupon}>
              Aplicar
            </button>
          </div>

          <div className="checkout-values">

            <div>
              <span>Subtotal</span>

              <strong>
                R${" "}
                {subtotal.toLocaleString(
                  "pt-BR",
                  {
                    minimumFractionDigits: 2,
                  }
                )}
              </strong>
            </div>

            <div>
              <span>Frete</span>

              <strong>
                {shipping === 0
                  ? "Grátis"
                  : `R$ ${shipping.toLocaleString(
                      "pt-BR",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}`}
              </strong>
            </div>

            {discount > 0 && (
              <div>
                <span>Desconto</span>

                <strong>
                  - R${" "}
                  {discount.toLocaleString(
                    "pt-BR",
                    {
                      minimumFractionDigits: 2,
                    }
                  )}
                </strong>
              </div>
            )}

          </div>

          <div className="checkout-total">

            <span>Total</span>

            <strong>
              R${" "}
              {total.toLocaleString(
                "pt-BR",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>

          </div>

          <button
            className="finish-order"
            onClick={handleFinishOrder}
          >
            Finalizar Pedido
          </button>

          <p className="secure-checkout">
            🔒 Ambiente seguro
          </p>

        </aside>

      </div>
    </PageTransition>
  );
}