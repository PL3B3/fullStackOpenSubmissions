import React from 'react'

const Contact = ({ person, remove }) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={remove(person.id)}>delete</button>
    </div>
  )
}
  
const Contacts = ({ persons, remove }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {persons.map(
        (person) => {
          return <Contact remove={remove} key={person.name} person={person}/>
        }
      )}
    </div>
  )
}

export default Contacts