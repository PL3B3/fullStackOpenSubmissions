import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const Notes = ({ notes }) => {
  return (
    <ul>
      {notes.map(note => 
          <Note key={note.id} note={note} />
      )}
    </ul>
  )
}
export default Notes