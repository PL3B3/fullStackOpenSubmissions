import React, { useState } from 'react'

const Contact = ({ person }) => {
  return (
    <div>{person.name}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (!persons.some((value) => value.name === newName)) {      
      const newPerson = {
        name: newName
      }

      setPersons(persons.concat(newPerson))
    } else {
      alert(`FOOL! ${newName} is already among us`)
    }

    setNewName('')
  }

  const onNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Contacts</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          <button type='submit' onClick={addPerson}>
            Add contact
          </button>
        </div>
      </form> 
      <h2>Numbers</h2>
      {persons.map(
        (person) => {
          return <Contact key={person.name} person={person}/>
        }
      )}
    </div>
  );
}

export default App;
