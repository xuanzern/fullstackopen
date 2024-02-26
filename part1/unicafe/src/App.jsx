import { useState } from 'react'
import Header from './components/header'
import Statistics from './components/statistics'
import Button from './components/button'

const App = () => {
  // text constants
  const feedbackTitle = 'give feedback'
  const statsTitle = 'statistics'
  const goodText = 'good'
  const neutralText = 'neutral'
  const badText = 'bad'
  const noFeedbackText = 'No feedback given'  

  // multiplier constants
  const goodMultiplier = 1
  const neutralMultiplier = 0
  const badMultiplier = -1

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const calcAverage = (g,n,b,total) => {
    const sum = g*goodMultiplier + n*neutralMultiplier + b*badMultiplier
    return (sum/total).toFixed(1)
  }

  const calcPositivePercentage = (g,total) => (g/total*100).toFixed(1) + '%'
  

  const handleGood = () => {
    setGood(good+1)
    const updatedGood = good + 1
    const updatedTotal = updatedGood+neutral+bad
    setTotal(updatedTotal)
    setAverage(calcAverage(updatedGood,neutral,bad,updatedTotal))
    setPositive(calcPositivePercentage(updatedGood,updatedTotal))
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    const updatedNeutral = neutral + 1
    const updatedTotal = good+updatedNeutral+bad
    setTotal(good+updatedNeutral+bad)
    setAverage(calcAverage(good,updatedNeutral,bad,updatedTotal))
    setPositive(calcPositivePercentage(good,updatedTotal))
  }

  const handleBad = () => {
    setBad(bad+1)
    const updatedBad = bad + 1
    const updatedTotal = good+neutral+updatedBad
    setTotal(good+neutral+updatedBad)
    setAverage(calcAverage(good,neutral,updatedBad,updatedTotal))
    setPositive(calcPositivePercentage(good,updatedTotal))
  }

  if (total === 0){
    return(
    <div>
      <Header title = {feedbackTitle}/>
      <Button onClick = {handleGood} text = {goodText}/>
      <Button onClick = {handleNeutral} text = {neutralText}/>
      <Button onClick = {handleBad} text = {badText}/>
      <Header title = {statsTitle}/>
      <p>{noFeedbackText}</p>
    </div>
    )
  }
  
  return (
    <div>
      <Header title = {feedbackTitle}/>
      <Button onClick = {handleGood} text = {goodText}/>
      <Button onClick = {handleNeutral} text = {neutralText}/>
      <Button onClick = {handleBad} text = {badText}/>
      <Header title = {statsTitle}/>
      <Statistics good={good} neutral = {neutral} bad = {bad} total = {total} average = {average} positive = {positive} />
      </div>
  )
}

export default App