import rock from "./assets/images/icon-rock.svg";
import paper from "./assets/images/icon-paper.svg";
import scissor from "./assets/images/icon-scissors.svg";
import { useState } from "react";
import Decisioin from "./Decisioin";

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
  const [score, setScore] = useState(0);

  const handleClick = (user) => {
    console.log(user);
    const computer = options[Math.floor(Math.random() * options.length)];
    setUser(user);
    setComputer(computer);
    handlePlay(user, computer);
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
    } else {
      console.log("Draw");
      setResult("Draw");
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
      <main>
        {user === null ? (
          <Choices handleClick={handleClick} />
        ) : (
          <Decisioin
            user={user}
            objectData={objectData}
            result={result}
            computer={computer}
            setResult={setResult}
            setUser={setUser}
          />
        )}

        {/* Display after choices */}

        {/* rules */}
        <div>
          <button className="rule-btn">Rules</button>
        </div>
      </main>
    </div>
  );
}

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
