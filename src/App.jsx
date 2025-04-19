import rockImg from "./assets/images/icon-rock.svg";
import paperImg from "./assets/images/icon-paper.svg";
import scissorImg from "./assets/images/icon-scissors.svg";
import { useState } from "react";
import Decisioin from "./Decisioin";

import RuleImage from "./assets/images/image-rules.svg";

import "./rules.css";

const options = ["rock", "scissor", "paper"];

const IMAGE_DATA = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

const WINNER = {
  scissor: { rock: "Win", scissor: "Draw", paper: "Loose" },
  rock: { rock: "Draw", scissor: "Loose", paper: "Win" },
  paper: { rock: "Loose", scissor: "Win", paper: "Draw" },
};

function App() {
  const [user, setUser] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [ruleModal, setRuleModal] = useState(false);

  const handleClick = (user) => {
    console.log(user);
    const computer = options[Math.floor(Math.random() * options.length)];
    setUser(user);
    setComputer(computer);
    setResult(null);
    setShowResult(false);
    setTimeout(() => {
      handlePlay(user, computer);
    }, 3000);
  };

  const handlePlay = (user, computer) => {
    const decide = WINNER[user][computer];
    setResult(decide);
    if (decide === "Win") {
      setScore(score + 1);
    } else if (decide === "Loose") {
      setScore(score - 1);
    }
    setTimeout(() => {
      setShowResult(true);
    }, 1000);
  };

  return (
    <div>
      {/* Score board */}
      <header id="header">
        <div className="header-text-section">
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
        </div>
        <div className="score-board">
          <h3>Score</h3>
          <h1>{score}</h1>
        </div>
      </header>
      <main className={user === null ? "animation" : "animation animation-begin"}>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
        {result === null ? (
          <Choices handleClick={handleClick} />
        ) : (
          <Decisioin
            user={user}
            objectData={IMAGE_DATA}
            result={result}
            computer={computer}
            setResult={setResult}
            setUser={setUser}
            showResult={showResult}
          />
        )}

        {/* Display after choices */}

        {/* rules */}
        <div>
          <button onClick={() => setRuleModal(true)} className="rule-btn">
            Rules
          </button>
        </div>
      </main>
      <RuleModal modal={ruleModal} handleModal={() => setRuleModal(false)} />
    </div>
  );
}

const RuleModal = ({ modal, handleModal }) => {
  return (
    modal && (
      <div className="rule-modal">
        <div className="rule-modal-content">
          <div className="rule-modal-header">
            <h1>Rules</h1>
            <button onClick={handleModal} className="close-btn">
              x
            </button>
          </div>
          <div className="rule-modal-body">
            <img src={RuleImage} alt="rule-image" />
          </div>
        </div>
      </div>
    )
  );
};

const Choices = ({ handleClick }) => {
  return (
    <div className="wrapper">
      <div className="rock-position">
        <div onClick={() => handleClick("rock")} className="rock object">
          <div>
            <img src={rockImg} alt="rock" />
          </div>
        </div>
      </div>
      <div className="paper-position">
        <div onClick={() => handleClick("paper")} className="paper object">
          <div>
            <img src={paperImg} alt="paper" />
          </div>
        </div>
      </div>

      <div className="scissor-position">
        <div onClick={() => handleClick("scissor")} className="scissor object">
          <div>
            <img src={scissorImg} alt="scissor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
