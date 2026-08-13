import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("mavila-cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "mavila-cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  function addToCart(product) {

    setCart((prev) => [...prev, product]);

  }

  function removeFromCart(index) {

    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );

  }

  function clearCart() {

    setCart([]);

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}