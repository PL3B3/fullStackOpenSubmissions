import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [ notes, setNotes ] = useState(props.notes)
  const [ newNoteText, setNewNoteText ] = useState('place note here')
  const [ showAll, setShowAll ] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const newNote = {
      id: notes.length + 1,
      content: newNoteText,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(newNote))
    setNewNoteText('')
  }

  const recordNote = (event) => {
    // console.log('event.target.value :>> ', event.target.value);
    setNewNoteText(event.target.value)
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter((note) => note.important)
  
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={toggleShowAll}>Show {showAll ? 'important' : 'all'} </button>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNoteText} onChange={recordNote} />
        <button type='submit'>Add note</button>
      </form>
    </div>
  )
}

export default App