import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { FavoritesContext } from "../context/FavoritesContext";
import { CartContext } from "../context/CartContext";

import PageTransition from "../components/PageTransition";
import FadeImage from "../components/FadeImage";
import { MV01_VARIANTS } from "../data/catalog";

import "../styles/Favorites.css";

export default function Favorites() {
  const {
    favorites,
    removeFavorite,
    clearFavorites,
  } = useContext(FavoritesContext);

  const { addToCart } = useContext(CartContext);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [selectedSize, setSelectedSize] =
    useState("");

  function productLink(product) {
    const variant = MV01_VARIANTS.find((item) => item.color === product.color);
    return variant ? `/mv01?cor=${variant.slug}` : "/mv01";
  }

  function handleRemove(product) {
    removeFavorite(
      product.name,
      product.color
    );

    toast.success(
      "Produto removido dos favoritos."
    );
  }

  function openSizeModal(product) {
    setSelectedProduct(product);
    setSelectedSize("");
  }

  function closeSizeModal() {
    setSelectedProduct(null);
    setSelectedSize("");
  }

  function handleConfirmCart() {
    if (!selectedSize) {
      toast.error(
        "Selecione um tamanho."
      );

      return;
    }

    addToCart({
      name: selectedProduct.name,
      price:
        selectedProduct.price ||
        899.9,
      image:
        selectedProduct.image,
      size: selectedSize,
      color:
        selectedProduct.color ||
        "Preto Carbono",
    });

    toast.success(
      "Produto adicionado ao carrinho!"
    );

    closeSizeModal();
  }

  function handleClear() {
    clearFavorites();

    toast.success(
      "Favoritos limpos."
    );
  }

  return (
    <PageTransition>
      <main className="favorites-page">

        <div className="favorites-header">
          <div>
            <span>
              SUA SELEÇÃO
            </span>

            <h1>
              Favoritos
            </h1>

            <p>
              Produtos que você salvou
              para ver depois.
            </p>
          </div>

          {favorites.length > 0 && (
            <button
              className="clear-favorites"
              onClick={handleClear}
            >
              Limpar favoritos
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <div className="favorites-empty">

            <span>
              ♡
            </span>

            <h2>
              Nenhum favorito ainda.
            </h2>

            <p>
              Salve seus modelos
              preferidos para encontrá-los
              rapidamente depois.
            </p>

            <Link
              to="/mv01"
              className="favorites-shop"
            >
              Conhecer MV-01
            </Link>

          </div>
        ) : (
          <div className="favorites-grid">

            {favorites.map(
              (product, index) => (
                <article
                  className="favorite-card"
                  key={`${product.name}-${product.color}-${index}`}
                >

                  <Link
                    to={productLink(product)}
                    className="favorite-image"
                  >
                    <FadeImage
                      src={product.image}
                      alt={`${product.name} ${product.color || ""}`}
                    />
                  </Link>

                  <div className="favorite-content">

                    <span className="favorite-brand">
                      MAVILA
                    </span>

                    <h2>
                      {product.name}
                    </h2>

                    {product.color && (
                      <p>
                        {product.color}
                      </p>
                    )}

                    <strong>
                      R$ 899,90
                    </strong>

                    <div className="favorite-actions">

                      <button
                        className="favorite-cart"
                        onClick={() =>
                          openSizeModal(
                            product
                          )
                        }
                      >
                        Adicionar ao Carrinho
                      </button>

                      <Link
                        to={productLink(product)}
                        className="favorite-view"
                      >
                        Ver Produto
                      </Link>

                      <button
                        className="favorite-remove"
                        onClick={() =>
                          handleRemove(
                            product
                          )
                        }
                      >
                        Remover
                      </button>

                    </div>

                  </div>

                </article>
              )
            )}

          </div>
        )}

        {selectedProduct && (
          <>
            <div
              className="favorite-modal-overlay"
              onClick={closeSizeModal}
            />

            <div className="favorite-size-modal">

              <div className="favorite-modal-header">

                <div>
                  <span>
                    ADICIONAR AO CARRINHO
                  </span>

                  <h2>
                    Escolha seu tamanho
                  </h2>
                </div>

                <button
                  className="favorite-modal-close"
                  onClick={closeSizeModal}
                  aria-label="Fechar"
                >
                  ✕
                </button>

              </div>

              <div className="favorite-modal-product">

                <div className="favorite-modal-image">
                  <img
                    src={
                      selectedProduct.image
                    }
                    alt={
                      selectedProduct.name
                    }
                  />
                </div>

                <div>
                  <strong>
                    {selectedProduct.name}
                  </strong>

                  <span>
                    {selectedProduct.color}
                  </span>

                  <p>
                    R$ 899,90
                  </p>
                </div>

              </div>

              <p className="favorite-size-label">
                Tamanho
              </p>

              <div className="favorite-size-options">

                {[38, 39, 40, 41, 42, 43].map((size) => {
                  const currentVariant = MV01_VARIANTS.find((item) => item.color === selectedProduct.color);
                  const available = currentVariant ? (currentVariant.stock[size] || 0) > 0 : true;

                  return (
                    <button
                      key={size}
                      disabled={!available}
                      className={selectedSize === size ? "selected" : ""}
                      onClick={() => setSelectedSize(size)}
                      title={available ? `Tamanho ${size}` : "Esgotado"}
                    >
                      {size}
                    </button>
                  );
                })}

              </div>

              <button
                className="favorite-confirm-cart"
                onClick={handleConfirmCart}
              >
                Adicionar ao Carrinho
              </button>

            </div>
          </>
        )}

      </main>
    </PageTransition>
  );
}