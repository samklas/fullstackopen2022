import { useState } from "react";

const Statistics = ({ all, good, neutral, bad, positives, average }) => {

  if (all === 0) {
    return <div>no feedback given</div>
  }

  return (
    <div>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positives' value={positives}/>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {

  if (text === 'positives') {
    return (
      <div>{text} {value}%</div>
    )
  }
  return (
    <div>{text} {value}</div>
  )

}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)


  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setAverage(average - 1)

  }

  

  const calculatePositives = () => {
    return good / all * 100
  }

  const calculateAverage = () => {
    return average/all
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics all={all} good={good} neutral={neutral} bad={bad} positives={calculatePositives()} average={calculateAverage()}/>
    </div>
  )
}

export default App;
