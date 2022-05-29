import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const courses = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  ,
  {
    id: 2,
    name: 'Stic Stack Stuck development',
    parts: [
      {
        name: 'Fundamentals of Erring',
        exercises: 12,
        id: 1
      },
      {
        name: 'Unrecoverable Crashes',
        exercises: 2,
        id: 2
      },
      {
        name: 'Useless Refactoring',
        exercises: 8,
        id: 3
      },
      {
        name: 'Coding at Night',
        exercises: 83,
        id: 4
      }
    ]
  }
  ,
  {
    name: 'Node.js',
    id: 3,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <App courses={courses} />
)
