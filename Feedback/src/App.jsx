import { useState } from "react";
import "./App.css";

const Statistics = (props) => {
  if (props.totalClicks === 0) {
    return <>No feedback given</>;
  } else {
    return (
      <div className="stats">
        <label>good</label>
        {(props.good / props.totalClicks) * 100}%
        <br />
        <label>neutral</label> {(props.neutral / props.totalClicks) * 100}%
        <br />
        <label>bad</label>
        {(props.bad / props.totalClicks) * 100}%
      </div>
    );
  }
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let totalClicks = good + bad + neutral;
  console.log(totalClicks);

  return (
    <>
      <h1>Give Feedback</h1>
      <div className="storing_buttons">
        <button
          onClick={() => {
            setGood(good + 1);
          }}
        >
          good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
          }}
        >
          Neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
          }}
        >
          Bad
        </button>

        <h3>Statistics</h3>

        {
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalClicks={totalClicks}
          />
        }
      </div>
    </>
  );
};

export default App;
