import React, { useState } from 'react'


const Section = ({ title }) => <h1>{title}</h1>

const Button = ({ onClick, text }) => {
  // console.log(onClick)

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, count, unit='' }) => {
  // console.log(text, count)

  return (
    <tr>
      <td>{text}</td>
      <td>{count} {unit}</td>
    </tr>
  )
}


const Statistics = ({ feedback }) => {
  const total = feedback['good'] + feedback['neutral'] + feedback['bad']
  
  if (total === 0) {
    return <div>NO FEEDBACK, NO RESULTS!</div>
  } else {
    const average = (
      (feedback['good'] - feedback['bad']) / 
      total
    ).toFixed(2)
  
    const percentPositive = (
      100 *
      feedback['good'] /
      total
    ).toFixed(2)
  
    return (
      <table>
        <tbody>
          <StatisticsLine text='good' count={feedback['good']} />
          <StatisticsLine text='neutral' count={feedback['neutral']} />
          <StatisticsLine text='bad' count={feedback['bad']} />
          <StatisticsLine text='all' count={total} />
          <StatisticsLine text='average' count={average} />
          <StatisticsLine text='positive' count={percentPositive} unit='%'/>
        </tbody>
      </table>
    )
  }
}

const Feedback = ({ onClickGenerator, feedback }) => {
  return (
    <div>
      {Object.keys(feedback).map(
        (item) => <Button key={item} text={item} onClick={onClickGenerator(item)} />
      )}
    </div>
  )
}

const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0
  })
  
  const incrementFeedback = (type) => {
    let newFeedback = {
      ...feedback
    }
    newFeedback[type] += 1

    return () => setFeedback(newFeedback)
  }

  return (
    <div>
      <Section title='FEED ME FEEDBACK' />
      <Feedback onClickGenerator={incrementFeedback} feedback={feedback} />
      <Section title='WITNESS RESULTS' />
      <Statistics feedback={feedback} />
    </div>
  )
}


export default App;
