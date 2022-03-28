import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  const copy = [...points]
  copy[selected] += 1
  let mostPoints = points[0]
  let j = 0
  for (let i = 0; i < points.length; i++) {
    if (points[i] > mostPoints) {
      mostPoints = points[i]
      j = i
    }
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {points[selected]} votes <br/>
      <button onClick={() => setPoints(copy)}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button><br/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[j]}<br/>
      has {mostPoints} votes
      
    </div>
  )
}

export default App
