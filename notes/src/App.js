import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import axios from 'axios'


const AddNote = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button type='submit'>Add note</button>
    </form>
  )
}

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ newNoteText, setNewNoteText ] = useState('place note here')
  const [ showAll, setShowAll ] = useState(true)

  const notesHook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then((response) => {
        setNotes(response.data)
      })
  }

  useEffect(notesHook, [])

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
      <Notes notes={notesToShow} />
      <AddNote value={newNoteText} onChange={recordNote} onSubmit={addNote} />
    </div>
  )
}

export default App

