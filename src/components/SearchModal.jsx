import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MV01_VARIANTS } from "../data/catalog";
import "../styles/SearchModal.css";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    const all = MV01_VARIANTS.map((variant) => ({
      name: "MV-01",
      subtitle: variant.color,
      image: `${import.meta.env.BASE_URL}${variant.image}`,
      link: `/mv01?cor=${variant.slug}`,
    }));
    if (!value) return all;
    return all.filter((item) => `${item.name} ${item.subtitle}`.toLowerCase().includes(value));
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onMouseDown={onClose} role="presentation">
      <section className="search-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Buscar produtos">
        <div className="search-top">
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar MV-01, Saphire, Silver..." aria-label="Buscar produtos" />
          <button type="button" onClick={onClose} aria-label="Fechar busca">✕</button>
        </div>
        <div className="search-results">
          {results.length === 0 ? (
            <p className="search-empty">Nenhum produto encontrado.</p>
          ) : results.map((item) => (
            <Link key={item.link} to={item.link} className="search-result" onClick={onClose}>
              <img src={item.image} alt="" loading="lazy" />
              <div><strong>{item.name}</strong><span>{item.subtitle}</span></div>
              <b>Ver →</b>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
