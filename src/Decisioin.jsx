import useSize from "./useSize";

export default function Decisioin({
  user,
  objectData,
  result,
  computer,
  setResult,
  setUser,
  showResult,
}) {
  console.log({
    user,
    objectData,
    result,
    computer,
    setResult,
    setUser,
    showResult,
  });
  const size = useSize();
  return (
    <>
      <section id="arena">
        <div className={"user-choice"}>
          <div className="title">your picked</div>
          <div
            // className="winner"
            className={result === "Win" ? "winner" : ""}
          >
            <div className={user + " object "}>
              <div>
                <img src={objectData[user]} alt={user} />
              </div>
            </div>
          </div>
        </div>
        {size.width >= 600 ? (
          <div className={showResult ? "result block" : "hidden"}>
            <h1>{result}</h1>
            <button
              className="btn btn-primary"
              onClick={() => {
                setResult(null);
                setUser(null);
              }}
            >
              Play Again
            </button>
          </div>
        ) : null}

        <div className="computer-choice">
          <div className="title">the House Picked</div>
          <div
            // className={"winner"}
            className={result === "Loose" ? "winner" : ""}
          >
            <div className={computer + " object"}>
              <div>
                <img src={objectData[computer]} alt={computer} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {size.width < 600 ? (
        <div className={showResult ? "result block text-center" : "hidden"}>
          <h1>{result}</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setResult(null);
              setUser(null);
            }}
          >
            Play Again
          </button>
        </div>
      ) : null}
    </>
  );
}
