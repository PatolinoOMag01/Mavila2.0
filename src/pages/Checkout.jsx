import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import "../styles/Checkout.css";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0) * (item.quantity || 1), 0);
  return <PageTransition>
    <SEO title="MV-01 em desenvolvimento — MAVILA" description="Conheça o projeto MV-01 da Mavila. As vendas ainda não começaram." />
    <main className="checkout-page">
      <section className="checkout-left">
        <div className="checkout-header">
          <span>MAVILA / FIRST DROP</span>
          <h1>O primeiro passo está chegando.</h1>
          <p>O MV-01 ainda é um conceito. O primeiro protótipo não foi produzido e não estamos recebendo pedidos ou pagamentos.</p>
        </div>
        <div className="checkout-section">
          <h2>Seu interesse no MV-01</h2>
          <p>Você pode continuar explorando as versões do tênis e acompanhar o desenvolvimento pelo MV Club.</p>
          <p style={{marginTop:20}}><Link to="/club" className="static-cta">Conhecer o MV Club</Link></p>
          <p style={{marginTop:20}}><Link to="/mv01">Voltar ao MV-01</Link></p>
        </div>
      </section>
      <aside className="checkout-right">
        <h2>Prévia do carrinho</h2>
        {cart.length ? cart.map((item,index)=><div className="checkout-product" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="checkout-product-info"><strong>{item.name}</strong><span>{item.color} • {item.size}</span><span>Quantidade: {item.quantity || 1}</span></div>
        </div>) : <p>Seu carrinho está vazio.</p>}
        <div className="checkout-total"><span>Valor conceitual</span><strong>R$ {total.toLocaleString("pt-BR",{minimumFractionDigits:2})}</strong></div>
        <p className="secure-checkout">Não há checkout ativo, reserva, cobrança ou prazo de entrega confirmado.</p>
      </aside>
    </main>
  </PageTransition>;
}
