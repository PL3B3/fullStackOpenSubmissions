import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>Section "{props.part.name}" has {props.part.exercises} exercises</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  const parts = props.course.parts
  const exercises = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <p>Total number of exercises: {exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Front half of webapp development',
    parts: [
      {
        name: 'React Foundations',
        exercises: 10
      },
      {
        name: 'Using React Props',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App1 = () => {
  const [ counter, setCounter ] = useState(0)

  const incrementCounter = () => setCounter(counter + 1)
  const decrementCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={decrementCounter} text='Minus 1'/>
      <Button onClick={resetCounter} text='Reset'/>
      <Button onClick={incrementCounter} text='Add 1'/>
    </div>
    
  )
}

const App2 = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)

  const incrementLeft = () => setLeft(left + 1)
  const incrementRight = () => setRight(right + 1)

  return (
    <div>
      <Display counter={left} />
      <Button onClick={incrementLeft} text='Left + 1'/>
      <Display counter={right} />
      <Button onClick={incrementRight} text='Right + 1'/>
    </div>
    
  )
}

export default App;
