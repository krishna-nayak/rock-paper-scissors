export default function Decisioin({
  user,
  objectData,
  result,
  computer,
  setResult,
  setUser,
}) {
  return (
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
        <button
          onClick={() => {
            setResult(null);
            setUser(null);
          }}
        >
          Play Again
        </button>
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
  );
}
