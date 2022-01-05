import React from 'react';
import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          id: 1,
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          id: 2,
          exercises: 7
        },
        {
          name: 'State of a component',
          id: 3,
          exercises: 14
        },
        {
          name: 'Talking with the backend',
          id: 4,
          exercises: 11
        }
      ]
    },
    {
      name: 'ELT Pipelines',
      id: 2,
      parts: [
        {
          name: 'Data ingestion',
          id: 1,
          exercises: 4
        },
        {
          name: 'Data Warehouses with Snowflake',
          id: 2,
          exercises: 9
        },
        {
          name: 'Transformations using DBT and Airflow',
          id: 3,
          exercises: 2
        },
        {
          name: 'Visualization',
          id: 4,
          exercises: 11
        }
      ]
    }
  ]
  
  return (
    <div>
      {courses.map(
        (course) => <Course key={course.id} course={course} />
        )}
    </div>
  )
}

export default App