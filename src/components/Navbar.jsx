import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { CartContext } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            MAVILA
          </Link>
        </div>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/mv01">MV-01</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>

        <div className="navbar-actions">
          <button
            className="cart-icon"
            onClick={() =>
              setDrawerOpen(true)
            }
            aria-label="Abrir carrinho"
          >
            🛒

            {cart.length > 0 && (
              <span className="cart-badge">
                {cart.length}
              </span>
            )}
          </button>

          <Link
            to="/profile"
            className="nav-btn"
          >
            MV Club
          </Link>

          <button
            className={`menu-toggle ${
              menuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link
            to="/mv01"
            onClick={closeMenu}
          >
            MV-01
          </Link>

          <Link
            to="/favorites"
            onClick={closeMenu}
          >
            Favoritos
          </Link>

          <Link
            to="/profile"
            onClick={closeMenu}
          >
            MV Club
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />
      )}

      <CartDrawer
        isOpen={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
      />
    </>
  );
}