import React from 'react'

const Note = ({ note, toggleImportance }) => {
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance(note.id)}>
        Make {note.important ? 'not important' : 'important'}
      </button>
    </li>
  )
}

const Notes = ({ notes, toggleImportance }) => {
  console.log(`notes`, notes)
  return (
    <ul>
      {notes.map(note => 
          <Note key={note.id} note={note} toggleImportance={toggleImportance}/>
      )}
    </ul>
  )
}
export default Notes