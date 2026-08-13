import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { CartContext } from "../context/CartContext";

import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-logo">
          <Link to="/">MAVILA</Link>
        </div>

        <nav className="navbar-links">
          <Link to="/">Home</Link>

          <Link to="/mv01">
            MV-01
          </Link>

          <Link to="/favorites">
            Favoritos
          </Link>
        </nav>

        <div className="navbar-actions">
          <button
            className="cart-icon"
            onClick={() =>
              setDrawerOpen(true)
            }
          >
            🛒

            {cart.length > 0 && (
              <span className="cart-badge">
                {cart.length}
              </span>
            )}
          </button>

            <Link to="/profile" className="nav-btn">
                MV Club
            </Link>
        </div>
      </header>

      <CartDrawer
        isOpen={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
      />
    </>
  );
}