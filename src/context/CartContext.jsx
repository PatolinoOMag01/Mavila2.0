import { createContext, useEffect, useState } from "react";

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
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.name === product.name &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existingIndex !== -1) {
        return prev.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(index) {
    setCart((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  function increaseQuantity(index) {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(index) {
    setCart((prev) =>
      prev
        .map((item, i) => {
          if (i !== index) {
            return item;
          }

          const quantity = item.quantity || 1;

          return {
            ...item,
            quantity: quantity - 1,
          };
        })
        .filter((item) => item.quantity > 0)
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
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}