import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {

  const {
    cart,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "150px 8%"
      }}
    >

      <h1
        style={{
          fontSize: "60px",
          marginBottom: "50px"
        }}
      >
        Carrinho
      </h1>

      {cart.length === 0 && (
        <p>Seu carrinho está vazio.</p>
      )}

      {cart.map((item, index) => (

        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginBottom: "30px",
            background: "#111",
            padding: "20px",
            borderRadius: "20px"
          }}
        >

          <img
            src={item.image}
            alt={item.name}
            width="150"
          />

          <div>

            <h2>{item.name}</h2>

            <p>
              Cor: {item.color || "Não selecionada"}
            </p>

            <p>
              Tamanho: {item.size || "Não selecionado"}
            </p>

            <h3>
              R$ {item.price.toFixed(2)}
            </h3>

            <button
              onClick={() => removeFromCart(index)}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer"
              }}
            >
              Remover
            </button>

          </div>

        </div>

      ))}

      {cart.length > 0 && (

        <>
          <h2
            style={{
              marginTop: "50px"
            }}
          >
            Total: R$ {total.toFixed(2)}
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px"
            }}
          >

            <button
              onClick={clearCart}
              style={{
                padding: "15px 30px",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Limpar Carrinho
            </button>

            <Link to="/checkout">

              <button
                style={{
                  padding: "15px 30px",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                Finalizar Compra
              </button>

            </Link>

          </div>

        </>

      )}

    </div>

  );

}