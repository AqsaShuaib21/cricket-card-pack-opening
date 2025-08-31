import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import cardData from "./cardData";

const CardDetail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [revealed, setRevealed] = useState({});
  const card = cardData.find((c) => c.id === parseInt(id));

  if (!card) return <h2 className="text-center mt-5">Card not found</h2>;

  const handleReveal = (playerId) => {
    setRevealed((prev) => ({ ...prev, [playerId]: true }));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left: Pack Card */}
        <div className="col-md-4 d-flex justify-content-center">
          <div
            className="card shadow-lg"
            style={{
              width: "18rem",
              position: "sticky",
              top: "50px",
              height: "fit-content",
            }}
          >
            <img src={card.image} className="card-img-top" alt={card.title} />
            <div className="card-body text-center">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        </div>

        {/* Right: Player Reveal Grid */}
        <div className="col-md-8">
          <h1 className="display-6 text-white bg-dark p-2 rounded">
            Players Unlocked
          </h1>

          <div className="row row-cols-2 row-cols-md-3 g-4">
            {card.players.map((player) => (
              <div className="col text-center" key={player.id}>
                <div
                  className="card border-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleReveal(player.id)}
                >
                  <img
                    src={player.image}
                    alt="Player"
                    className="img-fluid rounded"
                    style={{
                      // width: "100px", // or try 80px
                      height: "350px",
                      objectFit: "cover",
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                    }}
                  />
                  {revealed[player.id] && (
                    <div className="mt-2 fw-bold text-primary">
                      {player.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
