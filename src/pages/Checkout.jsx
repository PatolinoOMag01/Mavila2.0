import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { createCheckout } from "../services/checkout";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import "../styles/Checkout.css";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const subtotal = cart.reduce((sum, item) => sum + Number(item.price || 0) * (item.quantity || 1), 0);
  async function submit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const url = await createCheckout(cart, customer);
      window.location.assign(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return <PageTransition>
    <SEO title="Checkout — MAVILA" description="Finalize sua compra Mavila com segurança pelo Mercado Pago." />
    <main className="checkout-page">
      <section className="checkout-left">
        <div className="checkout-header">
          <span>CHECKOUT SEGURO</span>
          <h1>Finalizar compra</h1>
          <p>O pagamento será realizado no ambiente seguro do Mercado Pago. A loja está em integração e as vendas permanecem desativadas até a operação estar pronta.</p>
        </div>
        <form onSubmit={submit} className="checkout-section">
          <h2>Seus dados</h2>
          <div className="form-grid">
            <div className="form-group full"><label htmlFor="buyer-name">Nome completo</label><input id="buyer-name" required minLength={3} autoComplete="name" value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} /></div>
            <div className="form-group full"><label htmlFor="buyer-email">E-mail</label><input id="buyer-email" type="email" required autoComplete="email" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})} /></div>
          </div>
          <p style={{marginTop:20}}>Não solicitamos dados do cartão. Eles serão informados diretamente ao Mercado Pago quando a integração estiver ativa.</p>
          {error && <p role="alert" style={{marginTop:15,color:"#ff8b8b"}}>{error}</p>}
          <button type="submit" disabled={loading || !cart.length} style={{marginTop:20,padding:"16px 26px",borderRadius:40,border:0,fontWeight:700}}>{loading ? "Preparando..." : "Ir para pagamento seguro"}</button>
          <p style={{marginTop:20}}><Link to="/mv01">Continuar comprando</Link></p>
        </form>
      </section>
      <aside className="checkout-right">
        <h2>Resumo do pedido</h2>
        {cart.length ? cart.map((item,index)=><div className="checkout-product" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="checkout-product-info"><strong>{item.name}</strong><span>{item.color} / {item.size}</span><span>Qtd. {item.quantity || 1}</span></div>
        </div>) : <p>Carrinho vazio.</p>}
        <div className="checkout-total"><span>Subtotal</span><strong>R$ {subtotal.toLocaleString("pt-BR",{minimumFractionDigits:2})}</strong></div>
        <p className="secure-checkout">Frete, estoque e confirmação do pedido serão validados antes da ativação das vendas.</p>
      </aside>
    </main>
  </PageTransition>;
}
