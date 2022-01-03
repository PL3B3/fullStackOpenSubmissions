import React from 'react'

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

export default App;
