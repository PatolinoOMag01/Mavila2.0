export async function createCheckout(cart, customer) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: cart.map(item => ({ color: item.color, size: item.size, quantity: item.quantity || 1 })),
      customer: { name: customer.name.trim(), email: customer.email.trim() }
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Não foi possível iniciar o pagamento.");
  if (!result.checkoutUrl || !/^https:\/\//.test(result.checkoutUrl)) throw new Error("Link de pagamento inválido.");
  return result.checkoutUrl;
}
