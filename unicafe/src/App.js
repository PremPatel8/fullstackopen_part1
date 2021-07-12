import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGoodFeedback = () => setGood(good + 1)
  const giveNeutralFeedback = () => setNeutral(neutral + 1)
  const giveBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <Header name="give feedback" />
      <Button handleClick={giveGoodFeedback} text = "good" />
      <Button handleClick={giveNeutralFeedback} text = "neutral" />
      <Button handleClick={giveBadFeedback} text = "bad" />
      <Header name="statistics" />
      <Display name="good" value={good} />
      <Display name="neutral" value={neutral} />
      <Display name="bad" value={bad} />
    </div>
  )
}

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({name, value}) => {
  return(
    <span>{name} {value}<br/></span>
  )
}

export default App