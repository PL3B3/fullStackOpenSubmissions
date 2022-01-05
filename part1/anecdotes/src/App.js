import React, { useState } from 'react'

const randIndex = (length) => Math.floor(Math.random() * length)

const Anecdote = ({ anecdote, votes }) => {
  const author = anecdote.author || 'Unknown'
  return (
    <div>
      <q>{anecdote.quote}</q>
      - <strong>{author}</strong>
      <p>Has {votes} votes</p>
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    {
      quote: 'We build our computers the way we build our cities—over time, without a plan, on top of ruins.',
      author: 'Ellen Ullman'
    },
    {
      quote: 'In the end, it all comes down to 0 and 1.',
      author: 'Vineet Goel'
    },
    {
      quote:
      'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
      author: ''
    },
    {
      quote:
      'Don’t comment bad code – rewrite it.',
      author: 'Brian Kernighan'
    },
    {
      quote: 'Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      author: 'Rajanand'
    },
    {
      quote: 'All computers wait at the same speed.',
      author: ''
    },
    {
      quote: 'Any fool can use a computer. Many do.',
      author: 'Ted Nelson'
    },
    {
      quote: 'Experience is the name everyone gives to their mistakes.',
      author: 'Oscar Wilde'
    },
    {
      quote: 'I’m not a great programmer; I’m just a good programmer with great habits.',
      author: 'Kent Beck'
    },
    {
      quote: 'Computers are useless.  They can only give you answers.',
      author: 'Pablo Picasso'
    },
    {
      quote: 'Never trust a computer you can’t throw out a window.',
      author: ''
    },
    {
      quote: 'Intelligence is the ability to avoid doing work, yet getting the work done',
      author: 'Linus Torvalds'
    },
    {
      quote: 'Nothing will work unless you do.',
      author: 'Maya Angelou'
    }
  ]

  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [ mostVoted, setMostVoted ] = useState(0)

  const selectRandom = () => setSelected(randIndex(anecdotes.length))
  const addVote = () => {
    const votesCopy = [...votes]

    votesCopy[selected] += 1
    if (votesCopy[selected] >= votesCopy[mostVoted]) {
      setMostVoted(selected)
    }

    setVotes(votesCopy)
  }

  return (
    <div>
      <h1>One single crumb of wisdom</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={addVote} text='vote for me!' />
      <Button onClick={selectRandom} text='random quote' />
      <h1>The supreme crumblet of wisdom</h1>
      <Anecdote anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  )
}

export default App;
