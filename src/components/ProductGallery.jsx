import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function ProductGallery({
  product,
}) {
  const [searchParams] =
    useSearchParams();

  const [loading, setLoading] =
    useState(true);

  const variants =
    product?.variants || [];

  const selectedSlug =
    searchParams.get("cor");

  const selectedVariant =
    variants.find(
      (item) =>
        item.slug === selectedSlug
    ) || variants[0];

  const images = useMemo(
    () =>
      variants.map((variant) => ({
        slug: variant.slug,
        color: variant.color,
        src: `${import.meta.env.BASE_URL}${variant.image}`,
      })),
    [variants]
  );

  const initialImage =
    selectedVariant
      ? `${import.meta.env.BASE_URL}${selectedVariant.image}`
      : "";

  const [selectedImage, setSelectedImage] =
    useState(initialImage);

  useEffect(() => {
    if (!selectedVariant) {
      return;
    }

    setLoading(true);

    setSelectedImage(
      `${import.meta.env.BASE_URL}${selectedVariant.image}`
    );
  }, [
    selectedVariant?.slug,
    selectedVariant?.image,
  ]);

  function handleImageChange(image) {
    if (
      selectedImage === image
    ) {
      return;
    }

    setLoading(true);

    setSelectedImage(image);
  }

  if (
    !selectedVariant ||
    images.length === 0
  ) {
    return (
      <div className="gallery">
        <div className="main-image">
          <p>
            Nenhuma imagem disponível.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <div className="thumbnails">
        {images.map(
          (image, index) => (
            <button
              type="button"
              key={image.slug}
              className={
                selectedImage ===
                image.src
                  ? "thumb-wrapper active"
                  : "thumb-wrapper"
              }
              onClick={() =>
                handleImageChange(
                  image.src
                )
              }
              aria-label={`Ver ${product.name} na cor ${image.color}`}
            >
              <img
                src={image.src}
                alt={`${product.name} ${image.color}`}
                className="thumb"
                loading="lazy"
              />
            </button>
          )
        )}
      </div>

      <motion.div
        className="main-image"
        key={selectedImage}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {loading && (
          <div className="image-skeleton" />
        )}

        <img
          src={selectedImage}
          alt={`${product.name} ${selectedVariant.color}`}
          className={
            loading
              ? "product-main-img loading"
              : "product-main-img loaded"
          }
          onLoad={() =>
            setLoading(false)
          }
        />
      </motion.div>
    </div>
  );
}