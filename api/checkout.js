// Endpoint serverless para hospedagem compatível com Vercel.
// IMPORTANTE: não habilitar vendas sem banco de pedidos, reserva de estoque e webhook verificado.
const variants = new Set(["Preto Carbono", "Saphire", "Allucard", "Musgo", "Silver"]);
const allowedSizes = new Set(["38", "39", "40", "41", "42", "43"]);
const price = 899.90;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }
  if (process.env.ENABLE_SALES !== "true") {
    return res.status(503).json({ error: "Os pagamentos ainda não estão disponíveis." });
  }
  // Não aceitar pagamentos antes de existir persistência segura de pedidos.
  if (process.env.ORDERS_BACKEND_READY !== "true") {
    return res.status(503).json({ error: "A confirmação de pedidos ainda está em configuração." });
  }
  if (!process.env.MERCADOPAGO_ACCESS_TOKEN) {
    return res.status(503).json({ error: "Gateway de pagamentos não configurado." });
  }
  try {
    const { items, customer } = req.body || {};
    if (!Array.isArray(items) || items.length < 1 || items.length > 20 ||
        !customer || typeof customer.name !== "string" || customer.name.trim().length < 3 ||
        typeof customer.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
      return res.status(400).json({ error: "Dados do pedido inválidos." });
    }
    const validated = [];
    let count = 0;
    for (const item of items) {
      const qty = Number(item.quantity);
      if (!variants.has(item.color) || !allowedSizes.has(String(item.size)) ||
          !Number.isInteger(qty) || qty < 1 || qty > 5) {
        return res.status(400).json({ error: "Produto, tamanho ou quantidade inválidos." });
      }
      count += qty;
      validated.push({ id: "mv01", title: `MAVILA MV-01 — ${item.color} / ${item.size}`,
        quantity: qty, unit_price: price, currency_id: "BRL" });
    }
    if (count > 10) return res.status(400).json({ error: "Quantidade acima do limite." });
    // TODO obrigatório antes de produção: validar estoque em transação no banco,
    // criar pedido pendente e usar seu ID como external_reference.
    return res.status(503).json({ error: "A criação de pedidos ainda depende do banco de dados e controle de estoque." });
  } catch {
    return res.status(500).json({ error: "Falha ao preparar pagamento." });
  }
}
