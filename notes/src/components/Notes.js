import React from 'react'

const Note = ({ note, removeNote, toggleImportance }) => {
  return (
    <li>
      <button onClick={removeNote(note.id)}>
        Delete
      </button>
      <button onClick={toggleImportance(note.id)}>
        Make {note.important ? 'trivial' : 'important'}
      </button>
      {note.content}
    </li>
  )
}

const Notes = ({ notes, removeNote, toggleImportance }) => {
  return (
    <ul>
      {notes.map(note => 
          <Note key={note.id} note={note} removeNote={removeNote} toggleImportance={toggleImportance}/>
      )}
    </ul>
  )
}
export default Notes