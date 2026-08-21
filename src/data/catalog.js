export const MV01_VARIANTS = [
  { slug: "preto", color: "Preto Carbono", image: "mv01.png", stock: { 38: 8, 39: 12, 40: 6, 41: 9, 42: 4, 43: 2 } },
  { slug: "saphire", color: "Saphire", image: "mv02.png", stock: { 38: 0, 39: 5, 40: 3, 41: 7, 42: 2, 43: 0 } },
  { slug: "allucard", color: "Allucard", image: "mv03.png", stock: { 38: 4, 39: 2, 40: 0, 41: 5, 42: 3, 43: 0 } },
  { slug: "musgo", color: "Musgo", image: "mv04.png", stock: { 38: 0, 39: 0, 40: 4, 41: 6, 42: 2, 43: 3 } },
  { slug: "silver", color: "Silver", image: "mv05.png", stock: { 38: 5, 39: 4, 40: 7, 41: 0, 42: 3, 43: 2 } },
];

export const MV01 = {
  name: "MV-01",
  subtitle: "Street Luxury",
  price: 899.9,
  variants: MV01_VARIANTS,
};

export function getVariantBySlug(slug) {
  return MV01_VARIANTS.find((variant) => variant.slug === slug) || MV01_VARIANTS[0];
}

export function getVariantByColor(color) {
  return MV01_VARIANTS.find((variant) => variant.color === color) || MV01_VARIANTS[0];
}

export function getVariantImage(variant) {
  return `${import.meta.env.BASE_URL}${variant.image}`;
}
