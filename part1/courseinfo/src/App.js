import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} has {props.part.exercises} exercises</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.part1}/>
      <Part part={props.parts.part2}/>
      <Part part={props.parts.part3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total number of exercises: {props.exercises}</p>
  )
}


const App = () => {
  const course = 'Front half of webapp development'
  const part1 = 'React Foundations'
  const exercises1 = 10
  const part2 = 'Using React Props'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = {
    part1: {
      name: part1,
      exercises: exercises1
    },
    part2: {
      name: part2,
      exercises: exercises2
    },
    part3: {
      name: part3,
      exercises: exercises3
    }
  }

  const exercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App;
