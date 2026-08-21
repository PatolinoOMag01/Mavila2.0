import "../styles/FadeImage.css";
import { useState } from "react";

export default function FadeImage({
  src,
  alt,
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="fade-image-wrapper">
      {!loaded && (
        <div className="fade-image-skeleton" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} fade-image ${
          loaded ? "loaded" : ""
        }`}
      />
    </div>
  );
}