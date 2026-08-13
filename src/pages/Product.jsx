import PageTransition from "../components/PageTransition";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";

import "../styles/Product.css";

export default function Product() {
  return (
    <PageTransition>
      <div className="product-page">
        <ProductGallery />
        <ProductInfo />
      </div>

      <RelatedProducts />
    </PageTransition>
  );
}