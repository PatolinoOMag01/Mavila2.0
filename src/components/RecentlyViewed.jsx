import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/RecentlyViewed.css";

export default function RecentlyViewed() {
  const [items, setItems] = useState([]);
  useEffect(() => { setItems(JSON.parse(localStorage.getItem("mavila-recent") || "[]")); }, []);
  if (!items.length) return null;
  return <section className="recent-section"><div className="recent-head"><span>CONTINUE EXPLORANDO</span><h2>Vistos recentemente</h2></div><div className="recent-grid">{items.map((item)=><Link key={item.link} to={item.link} className="recent-card"><img src={item.image} alt={item.name} loading="lazy"/><div><strong>{item.name}</strong><span>{item.color}</span></div></Link>)}</div></section>;
}
