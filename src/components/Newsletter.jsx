import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/Newsletter.css";
export default function Newsletter(){const[email,setEmail]=useState("");function submit(e){e.preventDefault();if(!/^\S+@\S+\.\S+$/.test(email)){toast.error("Digite um email válido.");return;}localStorage.setItem("mavila-newsletter",email);toast.success("Você entrou na lista Mavila!");setEmail("");}return <section className="newsletter"><span>FIQUE POR DENTRO</span><h2>Entre no radar da Mavila.</h2><p>Lançamentos, drops e novidades direto no seu email.</p><form onSubmit={submit}><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="seuemail@email.com" aria-label="Seu email"/><button>Quero receber</button></form></section>}
