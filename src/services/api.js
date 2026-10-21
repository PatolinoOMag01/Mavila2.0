import { MV01 } from "../data/catalog";
export async function getProductBySlug(slug) {
  if (slug !== "mv01") throw new Error("Produto não encontrado.");
  return MV01;
}
