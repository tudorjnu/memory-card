import { useEffect, useState } from "react";
import "./App.scss";
import { getDeck } from "./lib/actions";
import _ from "lodash";
import { PropTypes } from "prop-types";

function PokemonCard({ children, handleClick }) {
  return (
    <div onClick={handleClick} className="card">
      {children}
    </div>
  );
}

PokemonCard.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <div>
        <div style={{ fontWeight: "bold" }}>Current Score</div>
        <div style={{ fontSize: "2rem" }}>{currentScore}</div>
      </div>
      <div>
        <div style={{ fontWeight: "bold" }}>Best Score</div>
        <div style={{ fontSize: "2rem" }}>{bestScore}</div>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};

function Modal({ showModal, handleModalClose }) {
  if (!showModal) {
    return null;
  }
  return (
    <div onClick={handleModalClose} className={"modal"}>
      <div className="modal-content">
        <h1>Game Over</h1>
      </div>
    </div>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  handleModalClose: PropTypes.func,
};

function App() {
  const [deck, setDeck] = useState(getDeck(5));
  const [cards, setCards] = useState(_.sampleSize(deck, 3));
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const sample = _.sampleSize(deck, 3);
    setCards(sample);
  }, [deck, isGameOver]);

  useEffect(() => {
    if (isGameOver) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      const newDeck = getDeck(5);
      setDeck(newDeck);
      setCards(_.sampleSize(newDeck, 3));
      setCurrentScore(0);
      setIsGameOver(false);
    }
  }, [isGameOver]);

  const handleCardClick = (index) => {
    const chosenCard = deck[index];
    if (chosenCard.clicked) {
      setIsGameOver(true);
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    } else {
      let updatedDeck = deck.map((card, i) =>
        i === index ? { ...card, clicked: true } : card,
      );
      setCurrentScore(currentScore + 1);
      setDeck(updatedDeck);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <div className="pokemon-card-container">
        {cards.map((card) => {
          return (
            <img
              key={card.index}
              onClick={() => handleCardClick(card.index)}
              src={card.link}
              className="pokemon-card"
            />
          );
        })}
      </div>
      <Modal showModal={showModal} handleModalClose={handleModalClose} />
    </>
  );
}

export default App;
