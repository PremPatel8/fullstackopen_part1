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

  return (
    <div>
      <Header name="give feedback" />

      <Button handleClick={giveGoodFeedback} text="good" />
      <Button handleClick={giveNeutralFeedback} text="neutral" />
      <Button handleClick={giveBadFeedback} text="bad" />

      <Header name="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <>
        <Display name="good" value={good} />
        <Display name="neutral" value={neutral} />
        <Display name="bad" value={bad} />
        <Display name="all" value={good + neutral + bad} />
        <Display name="average" value={(good - bad) / all} />
        <Display name="positive" value={(good / all) * 100} />
      </>
    );
  }
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ name, value }) => {
  const nameSet = new Set(["all", "average", "positive"]);

  if (
    nameSet.has(name) &&
    (value === "undefined" || value == null || isNaN(value) || value < 0)
  ) {
    value = 0;
  }

  if (name === "positive") {
    return (
      <span>
        {name} {value} %
        <br />
      </span>
    );
  } else {
    return (
      <span>
        {name} {value}
        <br />
      </span>
    );
  }
};

export default App;
