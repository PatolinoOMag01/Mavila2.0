import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import "../styles/Profile.css";

export default function Profile(){
  const [orders,setOrders]=useState([]);
  useEffect(()=>{setOrders(JSON.parse(localStorage.getItem("mavila-orders")||"[]"));},[]);
  return <PageTransition><SEO title="MV Club — MAVILA" description="Área do membro MV Club."/><main className="profile-page"><section className="profile-hero"><div className="profile-avatar">M</div><div><span>MV CLUB</span><h1>Seu espaço Mavila</h1><p>Acompanhe favoritos e pedidos salvos neste navegador.</p></div></section><div className="profile-layout"><aside className="profile-menu"><Link to="/favorites">♡ Favoritos</Link><Link to="/mv01">⌕ Explorar MV-01</Link><Link to="/faq">? Ajuda</Link></aside><section className="orders-panel"><div className="orders-head"><div><span>HISTÓRICO</span><h2>Seus pedidos</h2></div><b>{orders.length}</b></div>{orders.length===0?<div className="orders-empty"><p>Você ainda não finalizou nenhum pedido neste navegador.</p><Link to="/mv01">Conhecer MV-01</Link></div>:<div className="orders-list">{orders.map(order=><article className="order-card" key={order.id}><div><span>Pedido {order.id}</span><strong>{new Date(order.date).toLocaleDateString("pt-BR")}</strong></div><div><span>{order.items.reduce((s,i)=>s+(i.quantity||1),0)} item(ns)</span><strong>R$ {order.total.toLocaleString("pt-BR",{minimumFractionDigits:2})}</strong></div><div><span>{order.status}</span><strong>{order.payment.toUpperCase()}</strong></div></article>)}</div>}</section></div></main></PageTransition>;
}
