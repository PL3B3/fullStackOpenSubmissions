import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  const exercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Total number of exercises: {exercises}</p>
  )
}


const App = () => {
  const course = 'Front half of webapp development'

  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
