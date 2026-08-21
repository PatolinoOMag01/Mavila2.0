import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function closeMenu() { setMenuOpen(false); }

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-logo"><Link to="/" onClick={closeMenu}>MAVILA</Link></div>
        <nav className="navbar-links" aria-label="Navegação principal">
          <Link to="/">Home</Link><Link to="/mv01">MV-01</Link><Link to="/favorites">Favoritos</Link>
        </nav>
        <div className="navbar-actions">
          <button className="nav-icon" type="button" onClick={() => setSearchOpen(true)} aria-label="Buscar">⌕</button>
          <Link className="nav-icon favorite-nav-icon" to="/favorites" aria-label={`Favoritos: ${favorites.length}`}>
            ♡{favorites.length > 0 && <span className="nav-badge">{favorites.length}</span>}
          </Link>
          <button className="nav-icon" type="button" onClick={() => setDrawerOpen(true)} aria-label={`Abrir carrinho: ${cartCount} itens`}>
            🛒{cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </button>
          <Link to="/profile" className="nav-btn">MV Club</Link>
          <button className={`menu-toggle ${menuOpen ? "active" : ""}`} type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={menuOpen} aria-controls="mobile-menu"><span></span><span></span><span></span></button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav><Link to="/" onClick={closeMenu}>Home</Link><Link to="/mv01" onClick={closeMenu}>MV-01</Link><Link to="/favorites" onClick={closeMenu}>Favoritos ({favorites.length})</Link><Link to="/profile" onClick={closeMenu}>MV Club</Link><Link to="/sobre" onClick={closeMenu}>Sobre</Link><Link to="/faq" onClick={closeMenu}>FAQ</Link></nav>
      </div>
      {menuOpen && <div className="mobile-menu-overlay" onClick={closeMenu} />}
      <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
