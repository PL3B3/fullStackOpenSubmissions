import React from 'react'

const Contact = ({ person }) => {
    return (
      <div>{person.name} {person.number}</div>
    )
  }
  
  const Contacts = ({ persons }) => {
    return (
      <div>
        <h2>Contacts</h2>
        {persons.map(
          (person) => {
            return <Contact key={person.name} person={person}/>
          }
        )}
      </div>
    )
  }

export default Contacts