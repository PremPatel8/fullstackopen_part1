import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const giveGoodFeedback = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const giveNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const giveBadFeedback = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <Header name="give feedback" />
        <Button handleClick={giveGoodFeedback} text="good" />
        <Button handleClick={giveNeutralFeedback} text="neutral" />
        <Button handleClick={giveBadFeedback} text="bad" />
        <Header name="statistics" />
        <div>No feedback given</div>
      </div>
    );
  } else {
    return (
      <div>
        <Header name="give feedback" />

        <Button handleClick={giveGoodFeedback} text="good" />
        <Button handleClick={giveNeutralFeedback} text="neutral" />
        <Button handleClick={giveBadFeedback} text="bad" />

        <Header name="statistics" />

        <table>
          <tbody>
            <Statistics text="good" value={good} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="bad" value={bad} />
            <Statistics text="all" value={all} />
            <Statistics text="average" value={(good - bad) / all} />
            <Statistics text="positive" value={(good / all) * 100} />
          </tbody>
        </table>
      </div>
    );
  }
};

const Statistics = ({ text, value }) => {
  return (
    <tr>
      <Display text={text} value={value} />
    </tr>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ text, value }) => {
  const nameSet = new Set(["all", "average", "positive"]);

  if (
    nameSet.has(text) &&
    (value === "undefined" || value == null || isNaN(value) || value < 0)
  ) {
    value = 0;
  }

  if (text === "positive") {
    return (
      <>
        <td>{text}</td>
        <td>{value} %</td>
      </>
    );
  } else {
    return (
      <>
        <td>{text}</td>
        <td>{value}</td>
      </>
    );
  }
};

export default App;
