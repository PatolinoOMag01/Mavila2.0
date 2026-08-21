import { useEffect, useState } from "react";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import Reviews from "../components/Reviews";
import RelatedProducts from "../components/RelatedProducts";
import PageTransition from "../components/PageTransition";

import { getProductBySlug } from "../services/api";

import "../styles/Product.css";

export default function Product() {
  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError("");

        const data =
          await getProductBySlug(
            "mv01"
          );

        setProduct(data);
      } catch (error) {
        console.error(error);

        setError(
          "Não foi possível carregar o produto."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, []);

  if (loading) {
    return (
      <PageTransition>
        <main className="product-loading">
          <p>
            Carregando produto...
          </p>
        </main>
      </PageTransition>
    );
  }

  if (error || !product) {
    return (
      <PageTransition>
        <main className="product-loading">
          <h2>
            Erro ao carregar produto
          </h2>

          <p>{error}</p>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <>
        <div className="product-page">
          <ProductGallery
            product={product}
          />

          <ProductInfo
            product={product}
          />
        </div>

        <Reviews />

        <RelatedProducts />
      </>
    </PageTransition>
  );
}