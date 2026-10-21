const endpoint = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function isEarlyAccessConfigured() {
  return Boolean(endpoint && anonKey && /^https:\/\//.test(endpoint));
}

export async function joinEarlyAccess({ email, consent }) {
  if (!consent) throw new Error("Precisamos do seu consentimento para enviar novidades.");
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) || normalized.length > 254) {
    throw new Error("Digite um e-mail válido.");
  }
  if (!isEarlyAccessConfigured()) throw new Error("Inscrições indisponíveis no momento.");
  const response = await fetch(`${endpoint.replace(/\/$/, "")}/rest/v1/mv_early_access`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email: normalized, consent: true, source: "mv-club" }),
  });
  if (!response.ok) {
    if (response.status === 409) throw new Error("Esse e-mail já está cadastrado.");
    throw new Error("Não foi possível concluir a inscrição. Tente novamente mais tarde.");
  }
}
