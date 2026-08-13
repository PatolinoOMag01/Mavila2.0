import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";

import App from "./App";
import "./styles/index.css";

import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
        <App />
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);