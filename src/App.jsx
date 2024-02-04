import { useEffect, useState } from "react";
import "./App.scss";
import { getDeck } from "./lib/actions";
import _ from "lodash";
import { PropTypes } from "prop-types";

function PokemonCard({ children, handleClick }) {
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: "#404040",
        cursor: "pointer",
      }}
    >
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
    <div>
      <span>Current Score: {currentScore}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  );
}

function App() {
  const [deck, setDeck] = useState(getDeck(5));
  const [cards, setCards] = useState(_.sampleSize(deck, 3));
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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

  return (
    <div>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(8, minmax(50px, 100px))",
        }}
      >
        {cards.map((card) => {
          return (
            <PokemonCard
              key={card.index}
              handleClick={() => handleCardClick(card.index)}
            >
              <img src={card.link} />
            </PokemonCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
