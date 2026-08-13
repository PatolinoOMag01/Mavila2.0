import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGallery() {
  const images = [
    "/mv01-1.png",
    "/mv01-2.png",
    "/mv01-3.png",
    "/mv01-4.png",
  ];

  const [selectedImage, setSelectedImage] =
    useState(images[0]);

  return (
    <div className="gallery">
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={
              selectedImage === image
                ? "thumb active"
                : "thumb"
            }
            onClick={() =>
              setSelectedImage(image)
            }
          />
        ))}
      </div>

      <motion.div
        className="main-image"
        key={selectedImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img
          src={selectedImage}
          alt="MV-01"
        />
      </motion.div>
    </div>
  );
}