import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function ProductInfo() {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const colorMap = {
    preto: "Preto Carbono",
    saphire: "Saphire",
    allucard: "Allucard",
    musgo: "Musgo",
    silver: "Silver"
  };

  const imageMap = {
    "Preto Carbono": `${import.meta.env.BASE_URL}mv01.png`,
    "Saphire": `${import.meta.env.BASE_URL}mv02.png`,
    "Allucard": `${import.meta.env.BASE_URL}mv03.png`,
    "Musgo": `${import.meta.env.BASE_URL}mv04.png`,
    "Silver": `${import.meta.env.BASE_URL}mv05.png`
  };

  const urlColor = searchParams.get("cor");

  const initialColor =
    colorMap[urlColor] || "Preto Carbono";

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const { addToCart } = useContext(CartContext);
  const { addFavorite } = useContext(FavoritesContext);

  function handleBuyNow() {
    if (!selectedSize) {
      alert("Selecione um tamanho.");
      return;
    }

    addToCart({
      name: "MV-01",
      price: 899.90,
      image: imageMap[selectedColor],
      size: selectedSize,
      color: selectedColor
    });

    navigate("/checkout");
  }

  function handleColorChange(color) {
    setSelectedColor(color);

    const slugMap = {
      "Preto Carbono": "preto",
      "Saphire": "saphire",
      "Allucard": "allucard",
      "Musgo": "musgo",
      "Silver": "silver"
    };

    setSearchParams({
      cor: slugMap[color]
    });
  }

  function handleAddToCart() {

    if (!selectedSize) {
      alert("Selecione um tamanho.");
      return;
    }

    addToCart({
      name: "MV-01",
      price: 899.90,
      image: imageMap[selectedColor],
      size: selectedSize,
      color: selectedColor
    });

    alert("Produto adicionado ao carrinho!");
  }

  function handleFavorite() {

    addFavorite({
      name: "MV-01",
      image: imageMap[selectedColor],
      color: selectedColor
    });

    alert("Produto adicionado aos favoritos!");
  }

  return (

    <div className="product-info">

      <h1>MV-01</h1>

      <span className="subtitle">
        Street Luxury
      </span>

      <div className="rating">
        ⭐⭐⭐⭐⭐

        <span>
          4.9 • 327 avaliações verificadas
        </span>
      </div>

      <div className="price">
        R$ 899,90
      </div>

      <p className="description">
        O MV-01 combina performance e luxo em uma silhueta exclusiva da Mavila.
        Desenvolvido para quem busca conforto, identidade e presença.
      </p>

      <div className="features">

        <h3>Características</h3>

        <ul>
          <li>✓ Mesh premium respirável</li>
          <li>✓ Estrutura em TPU reforçada</li>
          <li>✓ Palmilha em espuma de alta densidade</li>
          <li>✓ Solado de amortecimento responsivo</li>
          <li>✓ Logo MV mesclado em metal</li>
          <li>✓ Construção Street Luxury</li>
        </ul>

      </div>

      <h3>Cores</h3>

      <div className="colors">

        {[
          "Preto Carbono",
          "Saphire",
          "Allucard",
          "Musgo",
          "Silver"
        ].map((color) => (

          <button
            key={color}
            className={selectedColor === color ? "selected" : ""}
            onClick={() => handleColorChange(color)}
          >
            {color}
          </button>

        ))}

      </div>

      <h3>Tamanhos</h3>

      <div className="sizes">

        {[38, 39, 40, 41, 42, 43].map((size) => (

          <button
            key={size}
            className={selectedSize === size ? "selected" : ""}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>

        ))}

      </div>

      <div className="buttons">

        <button
          className="buy"
          onClick={handleBuyNow}
        >
          Comprar Agora
        </button>

        <button
          className="cart"
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </button>

        <button
          className="cart"
          onClick={handleFavorite}
        >
          ❤️ Favoritar
        </button>

      </div>

    </div>

  );

}