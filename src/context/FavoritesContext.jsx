import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {

    const saved = localStorage.getItem("mavila-favorites");

    return saved ? JSON.parse(saved) : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "mavila-favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);

  function addFavorite(product) {

    const exists = favorites.find(
      item => item.name === product.name
    );

    if (!exists) {
      setFavorites(prev => [...prev, product]);
    }

  }

  function removeFavorite(name) {

    setFavorites(
      favorites.filter(
        item => item.name !== name
      )
    );

  }

  return (

    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >

      {children}

    </FavoritesContext.Provider>

  );

}