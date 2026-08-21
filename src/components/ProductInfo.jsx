import toast from "react-hot-toast";
import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";

import {
  MV01,
  MV01_VARIANTS,
  getVariantBySlug,
} from "../data/catalog";

export default function ProductInfo() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const navigate = useNavigate();

  const variant = getVariantBySlug(
    searchParams.get("cor")
  );

  const [selectedSize, setSelectedSize] =
    useState("");

  const [cep, setCep] = useState("");

  const [delivery, setDelivery] =
    useState(null);

  const { addToCart } =
    useContext(CartContext);

  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useContext(FavoritesContext);

  useEffect(() => {
    setSelectedSize("");
    setDelivery(null);
  }, [variant.slug]);

  useEffect(() => {
    const viewed = JSON.parse(
      localStorage.getItem(
        "mavila-recent"
      ) || "[]"
    );

    const item = {
      name: MV01.name,
      color: variant.color,
      image: `${import.meta.env.BASE_URL}${variant.image}`,
      link: `/mv01?cor=${variant.slug}`,
    };

    const next = [
      item,
      ...viewed.filter(
        (v) => v.link !== item.link
      ),
    ].slice(0, 5);

    localStorage.setItem(
      "mavila-recent",
      JSON.stringify(next)
    );
  }, [
    variant.slug,
    variant.color,
    variant.image,
  ]);

  const isFavorite = favorites.some(
    (item) =>
      item.name === MV01.name &&
      item.color === variant.color
  );

  const stock = variant.stock;

  const remaining = selectedSize
    ? stock[selectedSize] || 0
    : null;

  const availableSizes = useMemo(
    () =>
      Object.keys(stock).filter(
        (size) => stock[size] > 0
      ),
    [stock]
  );

  function productPayload() {
    return {
      name: MV01.name,
      price: MV01.price,
      image: `${import.meta.env.BASE_URL}${variant.image}`,
      size: selectedSize,
      color: variant.color,
    };
  }

  function requireSize() {
    if (!selectedSize) {
      toast.error(
        "Selecione um tamanho."
      );

      return false;
    }

    return true;
  }

  function handleBuyNow() {
    if (!requireSize()) {
      return;
    }

    addToCart(productPayload());

    navigate("/checkout");
  }

  function handleAddToCart() {
    if (!requireSize()) {
      return;
    }

    addToCart(productPayload());

    toast.success(
      "Produto adicionado ao carrinho!"
    );
  }

  function handleFavorite() {
    if (isFavorite) {
      removeFavorite(
        MV01.name,
        variant.color
      );

      toast.success(
        "Removido dos favoritos."
      );

      return;
    }

    addFavorite({
      name: MV01.name,
      price: MV01.price,
      image: `${import.meta.env.BASE_URL}${variant.image}`,
      color: variant.color,
    });

    toast.success(
      "Produto adicionado aos favoritos!"
    );
  }

  function checkCep() {
    const digits =
      cep.replace(/\D/g, "");

    if (digits.length !== 8) {
      toast.error(
        "Digite um CEP válido."
      );

      return;
    }

    const end = Number(
      digits.slice(-1)
    );

    setDelivery(
      end % 2 === 0
        ? "Chega em 3 a 5 dias úteis — frete grátis"
        : "Chega em 4 a 7 dias úteis — frete grátis"
    );
  }

  return (
    <div className="product-info">
      <span className="product-kicker">
        MAVILA / STREET LUXURY
      </span>

      <h1>{MV01.name}</h1>

      <span className="subtitle">
        {MV01.subtitle}
      </span>

      <div className="rating">
        ★★★★★
        <span>
          4.9 • avaliações verificadas
        </span>
      </div>

      <div className="price">
        R${" "}
        {MV01.price.toLocaleString(
          "pt-BR",
          {
            minimumFractionDigits: 2,
          }
        )}
      </div>

      <p className="description">
        O MV-01 combina performance e
        luxo em uma silhueta exclusiva da
        Mavila. Desenvolvido para quem
        busca conforto, identidade e
        presença.
      </p>

      <div className="features">
        <h3>Características</h3>

        <ul>
          <li>
            ✓ Mesh premium respirável
          </li>

          <li>
            ✓ Estrutura em TPU reforçada
          </li>

          <li>
            ✓ Palmilha em espuma de alta
            densidade
          </li>

          <li>
            ✓ Solado de amortecimento
            responsivo
          </li>

          <li>
            ✓ Logo MV mesclado em metal
          </li>
        </ul>
      </div>

      <h3>Cores</h3>

      <div className="colors">
        {MV01_VARIANTS.map(
          (item) => (
            <button
              type="button"
              key={item.slug}
              className={
                variant.slug ===
                item.slug
                  ? "color-option selected"
                  : "color-option"
              }
              onClick={() =>
                setSearchParams({
                  cor: item.slug,
                })
              }
            >
              <span
                className={`color-swatch color-swatch-${item.slug}`}
              />

              <span>
                {item.color}
              </span>
            </button>
          )
        )}
      </div>

      <div className="size-title">
        <h3>Tamanhos</h3>

        <span>
          {availableSizes.length}{" "}
          disponíveis
        </span>
      </div>

      <div className="sizes">
        {[38, 39, 40, 41, 42, 43].map(
          (size) => {
            const amount =
              stock[size] || 0;

            return (
              <button
                type="button"
                key={size}
                disabled={!amount}
                title={
                  !amount
                    ? "Esgotado"
                    : `${amount} em estoque`
                }
                className={
                  selectedSize === size
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>
            );
          }
        )}
      </div>

      {remaining !== null &&
        remaining > 0 &&
        remaining <= 3 && (
          <div className="low-stock">
            Últimas {remaining} unidades
            no tamanho {selectedSize}
          </div>
        )}

      <div className="delivery-box">
        <strong>
          Calcular entrega
        </strong>

        <div>
          <input
            value={cep}
            onChange={(e) => {
              const digits =
                e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 8);

              setCep(
                digits.replace(
                  /(\d{5})(\d)/,
                  "$1-$2"
                )
              );
            }}
            placeholder="00000-000"
            inputMode="numeric"
          />

          <button
            type="button"
            onClick={checkCep}
          >
            Calcular
          </button>
        </div>

        {delivery && (
          <p>{delivery}</p>
        )}
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
          className={`cart favorite-product-button ${
            isFavorite ? "active" : ""
          }`}
          onClick={handleFavorite}
        >
          {isFavorite
            ? "♥ Favoritado"
            : "♡ Favoritar"}
        </button>
      </div>

      <div className="product-benefits">
        <div className="benefit-item">
          <span className="benefit-icon">
            📦
          </span>

          <div>
            <strong>
              Frete grátis
            </strong>

            <p>
              Em compras acima de R$ 699
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">
            ↩
          </span>

          <div>
            <strong>
              Troca fácil
            </strong>

            <p>
              Até 30 dias após o
              recebimento
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">
            🔒
          </span>

          <div>
            <strong>
              Pagamento seguro
            </strong>

            <p>
              Seus dados protegidos
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <span className="benefit-icon">
            ✈️
          </span>

          <div>
            <strong>
              Envio rápido
            </strong>

            <p>
              Pedido preparado em até 2
              dias úteis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}