import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import PageTransition from "../components/PageTransition";

export default function Favorites() {
  const { favorites, removeFavorite } =
    useContext(FavoritesContext);

  return (
    <PageTransition>
      <div
        style={{
          minHeight: "100vh",
          background: "#0f0f0f",
          color: "white",
          padding: "150px 8%",
        }}
      >
        <h1>Favoritos</h1>

        {favorites.map((product) => (
          <div key={product.name}>
            <img
              src={product.image}
              width="150"
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <button
              onClick={() =>
                removeFavorite(product.name)
              }
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}