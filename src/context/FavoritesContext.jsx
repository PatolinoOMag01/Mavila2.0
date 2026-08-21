import {
  createContext,
  useEffect,
  useState,
} from "react";

export const FavoritesContext =
  createContext();

export function FavoritesProvider({
  children,
}) {
  const [favorites, setFavorites] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "mavila-favorites"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "mavila-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(product) {
    setFavorites((prev) => {
      const exists = prev.find(
        (item) =>
          item.name === product.name &&
          item.color === product.color
      );

      if (exists) {
        return prev;
      }

      return [
        ...prev,
        product,
      ];
    });
  }

  function removeFavorite(
    name,
    color
  ) {
    setFavorites((prev) =>
      prev.filter(
        (item) =>
          !(
            item.name === name &&
            item.color === color
          )
      )
    );
  }

  function clearFavorites() {
    setFavorites([]);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}