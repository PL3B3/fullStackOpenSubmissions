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
  const part1 = {
    name: 'React Foundations',
    exercises: 10
  }
  const part2 = {
    name: 'Using React Props',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = {
    part1: part1,
    part2: part2,
    part3: part3
  }


  const exercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App;
