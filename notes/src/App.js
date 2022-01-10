import React, { useState, useEffect } from 'react'
import Notes from './components/Notes'
import noteService from './services/notes'

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
    noteService
      .getAll()
      .then(storedNotes => setNotes(storedNotes))
  }

  useEffect(notesHook, [])

  const toggleImportance = (id) => () => {
    const patchImportant = {
      important: !notes.find(n => n.id === id).important
    }

    noteService
      .update(id, patchImportant)
      .then(patchedNote => {
        setNotes(notes.map(note => note.id === id ? patchedNote : note))
      })
      .catch(err => {
        console.error(`Announcement: Note #${id} has already been removed`)
      })
  }

  const addNote = (event) => {
    event.preventDefault()
    const newNote = {
      content: newNoteText,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    noteService
      .create(newNote)
      .then(createdNote => {
        setNotes(notes.concat(createdNote))
        setNewNoteText('')
      })
  }

  const removeNote = (id) => () => {
    noteService
      .remove(id)
      .then(response => setNotes(notes.filter(note => note.id !== id)))
      .catch(err => console.error(err))
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
      <Notes removeNote={removeNote} toggleImportance={toggleImportance} notes={notesToShow} />
      <AddNote value={newNoteText} onChange={recordNote} onSubmit={addNote} />
    </div>
  )
}

export default App

