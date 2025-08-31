import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardData from "./cardData";
import { toast } from "react-toastify";

const Card = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();

  const handleOpenPack = (id) => {
    setActiveCardId(id);
    toast("🚀 Opening Pack...", { theme: "dark", autoClose: 1000 });

    setTimeout(() => {
      navigate(`/card/${id}`);
    }, 700); // Wait for animation to finish
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((card) => (
          <div className="col" key={card.id}>
            <div
              className={`card ${
                activeCardId === card.id ? "card-animate" : ""
              }`}
              style={{ width: "18rem" }}
            >
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenPack(card.id)}
                >
                  Open Pack
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
