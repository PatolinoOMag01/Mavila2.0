import { MV01 } from "../data/catalog";

// Fonte local enquanto a Mavila ainda não possui API ou estoque real.
export async function getProductBySlug(slug) {
  if (slug !== "mv01") throw new Error("Produto não encontrado.");
  return {
    ...MV01,
    description: "O primeiro sneaker da Mavila. Conceito visual em desenvolvimento; especificações, materiais e preço sujeitos a alterações antes da fabricação.",
  };
}
