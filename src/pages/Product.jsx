import PageTransition from "../components/PageTransition";
import Reviews from "../components/Reviews";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";
import RecentlyViewed from "../components/RecentlyViewed";
import SEO from "../components/SEO";

import "../styles/Product.css";

export default function Product() {
  return (
    <PageTransition>
      <SEO title="MV-01 — MAVILA" description="Conheça o MAVILA MV-01: street luxury, conforto premium e identidade urbana." />
      <div className="product-page">
        <ProductGallery />
        <ProductInfo />
      </div>

      <Reviews />

      <RelatedProducts />

      <RecentlyViewed />
    </PageTransition>
  );
}