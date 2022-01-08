import React, { useState } from 'react'

const fakeContacts = [
  { name: 'Wanzooka', number: '334-217-9895'},
  { name: 'MHB', number: '1-800-255-4428'},
  { name: 'Dr. Doctor, MD', number: '500-310-2311'},
  { name: 'Saul Goodman', number: '485-912-9192'},
  { name: 'The Associate', number: '000000'},
  { name: 'Officer Large', number: '9-1-1'},
  { name: 'EBUBECHUKWE', number: '0100-333-923812938492-39290-111'}
]

const Contact = ({ person }) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

const TextInput = ({ prompt, value, onChange }) => {
  return (
    <div>
      {prompt}: <input value={value} onChange={onChange}/>
    </div>
  )
}

const TextForm = ({ inputs, onSubmit }) => {
  return (
    <div>
      {inputs.map(
        () => {
          return 
        }
      )}
      <button type='submit' onClick={onSubmit}>
        Add contact
      </button>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState(fakeContacts)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if (!persons.some((value) => value.name === newName)) {      
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson))
    } else {
      alert(`FOOL! ${newName} is already among us`)
    }

    setNewName('')
    setNewNumber('')
  }

  const onNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const onNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const onNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const personsToShow = nameFilter
    ? persons.filter(
        (person) => {
          const query = person.name.toLowerCase()
          const key = nameFilter.toLowerCase()
          return query.includes(key)
        }
      )
    : persons

  return (
    <div>
      <h1>ROLODEX OF FAMILIAR PERSONS</h1>
      <h2>Filter</h2>
      <form>
        <TextInput prompt='Name contains' value={nameFilter} onChange={onNameFilterChange} />
      </form>
      <h2>Add Contact</h2>
      <form>
        <TextInput prompt='Name' value={newName} onChange={onNameChange} />
        <TextInput prompt='Number' value={newNumber} onChange={onNumberChange} />
        <div>
          <button type='submit' onClick={addPerson}>
            Add contact
          </button>
        </div>
      </form> 
      <h2>Contacts</h2>
      {personsToShow.map(
        (person) => {
          return <Contact key={person.name} person={person}/>
        }
      )}
    </div>
  );
}

export default App;
