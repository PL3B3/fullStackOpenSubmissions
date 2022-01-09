import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import TextForm from './components/TextForm'
import Contacts from './components/Contacts'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const personsHook = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }

  useEffect(personsHook, [])

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

  const formInputs = [
    {
      prompt: 'Name',
      value: newName, 
      onChange: onNameChange
    },
    {
      prompt: 'Number',
      value: newNumber,
      onChange: onNumberChange
    }
  ]

  const formSubmit = {
    prompt: 'Add contact',
    onSubmit: addPerson
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
      <Filter value={nameFilter} onChange={onNameFilterChange} />
      <TextForm title='Add Contact' inputs={formInputs} submit={formSubmit} />
      <Contacts persons={personsToShow} />
    </div>
  );
}

export default App;
