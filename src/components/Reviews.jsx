import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import "../styles/Reviews.css";

export default function Reviews() {
  const defaultReviews = [
    {
      id: 1,
      name: "Lucas M.",
      rating: 5,
      color: "Saphire",
      size: 41,
      text: "Muito confortável e o acabamento surpreendeu. O tênis chama bastante atenção pessoalmente.",
      verified: true,
    },
    {
      id: 2,
      name: "Rafael S.",
      rating: 5,
      color: "Preto Carbono",
      size: 42,
      text: "Material muito bom, ficou certinho no pé e o visual é bem mais premium ao vivo.",
      verified: true,
    },
    {
      id: 3,
      name: "Gabriel T.",
      rating: 4,
      color: "Silver",
      size: 40,
      text: "Tênis bonito e confortável. Gostei bastante do design e da qualidade do acabamento.",
      verified: true,
    },
  ];

  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem(
      "mavila-reviews"
    );

    return savedReviews
      ? JSON.parse(savedReviews)
      : defaultReviews;
  });

  const [modalOpen, setModalOpen] = useState(false);

  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("Preto Carbono");
  const [size, setSize] = useState("40");

  useEffect(() => {
    localStorage.setItem(
      "mavila-reviews",
      JSON.stringify(reviews)
    );
  }, [reviews]);

  function closeModal() {
    setModalOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Digite seu nome.");
      return;
    }

    if (!comment.trim()) {
      toast.error("Escreva sua avaliação.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      rating,
      color,
      size,
      text: comment.trim(),
      verified: false,
    };

    setReviews((prev) => [
      newReview,
      ...prev,
    ]);

    toast.success(
      "Avaliação enviada com sucesso!"
    );

    setName("");
    setComment("");
    setRating(5);
    setColor("Preto Carbono");
    setSize("40");

    closeModal();
  }

  const totalRatings = reviews.reduce(
    (sum, review) =>
      sum + review.rating,
    0
  );

  const averageRating =
    reviews.length > 0
      ? totalRatings / reviews.length
      : 0;

  return (
    <>
      <section className="reviews-section">

        <div className="reviews-header">
          <div>

            <span className="reviews-tag">
              AVALIAÇÕES
            </span>

            <h2>
              O que estão dizendo
            </h2>

            <div className="reviews-summary">

              <strong>
                {averageRating.toFixed(1)}
              </strong>

              <div>

                <span className="reviews-stars">
                  ★★★★★
                </span>

                <p>
                  {reviews.length} avaliações
                </p>

              </div>

            </div>

          </div>

          <button
            className="review-button"
            onClick={() =>
              setModalOpen(true)
            }
          >
            Avaliar Produto
          </button>
        </div>

        <div className="reviews-list">

          {reviews.map((review) => (
            <article
              className="review-card"
              key={review.id}
            >

              <div className="review-top">

                <div>
                  <strong>
                    {review.name}
                  </strong>

                  <span className="verified">
                    {review.verified
                      ? "Compra verificada"
                      : "Avaliação enviada"}
                  </span>
                </div>

                <span className="review-stars">
                  {"★".repeat(
                    review.rating
                  )}

                  {"☆".repeat(
                    5 - review.rating
                  )}
                </span>

              </div>

              <p>
                {review.text}
              </p>

              <small>
                Cor: {review.color}
                {" • "}
                Tamanho: {review.size}
              </small>

            </article>
          ))}

        </div>

      </section>

      {modalOpen && (
        <>

          <div
            className="review-modal-overlay"
            onClick={closeModal}
          />

          <div className="review-modal">

            <div className="review-modal-header">

              <div>
                <span>
                  SUA EXPERIÊNCIA
                </span>

                <h2>
                  Avaliar MV-01
                </h2>
              </div>

              <button
                className="review-modal-close"
                onClick={closeModal}
                aria-label="Fechar avaliação"
              >
                ✕
              </button>

            </div>

            <form
              className="review-form"
              onSubmit={handleSubmit}
            >

              <div className="review-form-group">

                <label>
                  Sua nota
                </label>

                <div className="rating-selector">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (
                      <button
                        type="button"
                        key={star}
                        className={
                          star <= rating
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          setRating(star)
                        }
                        aria-label={`${star} estrelas`}
                      >
                        ★
                      </button>
                    )
                  )}

                </div>

              </div>

              <div className="review-form-group">

                <label>
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="review-form-row">

                <div className="review-form-group">

                  <label>
                    Cor comprada
                  </label>

                  <select
                    value={color}
                    onChange={(e) =>
                      setColor(
                        e.target.value
                      )
                    }
                  >

                    <option>
                      Preto Carbono
                    </option>

                    <option>
                      Saphire
                    </option>

                    <option>
                      Allucard
                    </option>

                    <option>
                      Musgo
                    </option>

                    <option>
                      Silver
                    </option>

                  </select>

                </div>

                <div className="review-form-group">

                  <label>
                    Tamanho
                  </label>

                  <select
                    value={size}
                    onChange={(e) =>
                      setSize(
                        e.target.value
                      )
                    }
                  >

                    {[
                      38,
                      39,
                      40,
                      41,
                      42,
                      43,
                    ].map((item) => (
                      <option
                        value={item}
                        key={item}
                      >
                        {item}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              <div className="review-form-group">

                <label>
                  Sua avaliação
                </label>

                <textarea
                  placeholder="Conte como foi sua experiência com o MV-01..."
                  value={comment}
                  onChange={(e) =>
                    setComment(
                      e.target.value
                    )
                  }
                />

              </div>

              <button
                type="submit"
                className="submit-review"
              >
                Enviar Avaliação
              </button>

            </form>

          </div>

        </>
      )}
    </>
  );
}