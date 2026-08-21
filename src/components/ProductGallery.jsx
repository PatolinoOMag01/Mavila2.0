import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

export default function ProductGallery() {
  const base = import.meta.env.BASE_URL;

  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const colorImages = {
    preto: `${base}mv01.png`,
    saphire: `${base}mv02.png`,
    allucard: `${base}mv03.png`,
    musgo: `${base}mv04.png`,
    silver: `${base}mv05.png`,
  };

  const images = [
    `${base}mv01.png`,
    `${base}mv02.png`,
    `${base}mv03.png`,
    `${base}mv04.png`,
    `${base}mv05.png`,
  ];

  const urlColor = searchParams.get("cor");

  const initialImage =
    colorImages[urlColor] || `${base}mv01.png`;

  const [selectedImage, setSelectedImage] =
    useState(initialImage);

  useEffect(() => {
    const color = searchParams.get("cor");

    if (colorImages[color]) {
      setLoading(true);
      setSelectedImage(colorImages[color]);
    }
  }, [searchParams]);

  function handleImageChange(image) {
    if (selectedImage === image) {
      return;
    }

    setLoading(true);
    setSelectedImage(image);
  }

  return (
    <div className="gallery">
      <div className="thumbnails">
        {images.map((image, index) => (
          <button
            type="button"
            className={
              selectedImage === image
                ? "thumb-wrapper active"
                : "thumb-wrapper"
            }
            key={image}
            onClick={() =>
              handleImageChange(image)
            }
            aria-label={`Ver opção ${index + 1}`}
          >
            <img
              src={image}
              alt={`MV-01 opção ${index + 1}`}
              className="thumb"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <motion.div
        className="main-image"
        key={selectedImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {loading && (
          <div className="image-skeleton" />
        )}

        <img
          src={selectedImage}
          alt="Tênis Mavila MV-01"
          className={
            loading
              ? "product-main-img loading"
              : "product-main-img loaded"
          }
          onLoad={() => setLoading(false)}
        />
      </motion.div>
    </div>
  );
}