import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissor from "./assets/images/icon-scissors.svg";
import { useState } from "react";
import Decisioin from "./Decisioin";

import RuleImage from "./assets/images/image-rules.svg";

import "./rules.css";

const options = ["rock", "scissor", "paper"];
// const optionImage = [rock, scissor, paper];

const objectData = {
  rock: rock,
  scissor: scissor,
  paper: paper,
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
    const object = {};
    object[computer] = { name: "computer" };
    object[user] = { name: "user" };
    if (Object.keys(object).length === 2) {
      console.log("Play", object);
      const ouput = winnerDecide(object, user, computer);

      console.log(ouput.winner);
      setResult(ouput.winner.name === "user" ? "Win" : "Loose");
      if (ouput.winner.name === "user") {
        setScore(score + 1);
      } else {
        setScore(score - 1);
      }

      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    } else {
      console.log("Draw");
      setResult("Draw");
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };
  const winnerDecide = (object, user, computer) => {
    const output = { winner: null };
    switch (user) {
      case "rock":
        if (computer === "scissor") {
          output.winner = object[user];
        } else {
          output.winner = object[computer];
        }
        break;

      case "scissor":
        if (computer === "paper") {
          output.winner = object[user];
        } else {
          output.winner = object[computer];
        }
        break;
      case "paper":
        if (computer === "rock") {
          output.winner = object[user];
        } else {
          output.winner = object[computer];
        }
        break;
    }

    return output;
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
      <main
        className={user === null ? "animation" : "animation animation-begin"}
      >
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
        {result === null ? (
          <Choices handleClick={handleClick} />
        ) : (
          <Decisioin
            user={user}
            objectData={objectData}
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
            <img src={rock} alt="rock" />
          </div>
        </div>
      </div>
      <div className="paper-position">
        <div onClick={() => handleClick("paper")} className="paper object">
          <div>
            <img src={paper} alt="paper" />
          </div>
        </div>
      </div>

      <div className="scissor-position">
        <div onClick={() => handleClick("scissor")} className="scissor object">
          <div>
            <img src={scissor} alt="scissor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

/* 

<section id="arena">
          <div className="user-choice">
            <div className="title">your picked</div>
            <div className={user + " object winner"}>
              <div>
                <img src={objectData[user]} alt={user} />
              </div>
            </div>
          </div>
          <div className={result === null ? "hidden" : "result block"}>
            <h1>{result}</h1>
            <button onClick={() => setResult(null)}>Play Again</button>
          </div>
          <div className="computer-choice">
            <div className="title">the House Picked</div>
            <div className={computer + " object"}>
              <div>
                <img src={objectData[computer]} alt={computer} />
              </div>
            </div>
          </div>
        </section>


        // other




         <div className="wrapper">
          <div className="rock-position">
            <div onClick={() => handleClick("rock")} className="rock object">
              <div>
                <img src={rock} alt="rock" />
              </div>
            </div>
          </div>
          <div className="paper-position">
            <div onClick={() => handleClick("paper")} className="paper object">
              <div>
                <img src={paper} alt="paper" />
              </div>
            </div>
          </div>

          <div className="scissor-position">
            <div
              onClick={() => handleClick("scissor")}
              className="scissor object"
            >
              <div>
                <img src={scissor} alt="scissor" />
              </div>
            </div>
          </div>
        </div>
*/
