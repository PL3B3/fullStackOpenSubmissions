import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import TextForm from './components/TextForm'
import Contacts from './components/Contacts'
import personService from './services/persons'

const samePerson = (name1, name2) => name1.toLowerCase().trim() === name2.toLowerCase().trim()

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const personsHook = () => {
    personService
      .getAll()
      .then(storedPersons => setPersons(storedPersons))
  }

  useEffect(personsHook, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    if (!persons.some(person => samePerson(person.name, newName))) {
      const newPerson = {
        name: newName.trim(),
        number: newNumber.trim()
      }

      personService
        .create(newPerson)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
        })
        .catch(err => console.error(`${newName} already on server`))
    } else {
      alert(`FOOL! ${newName} is already among us`)
    }

    setNewName('')
    setNewNumber('')
  }

  const removePerson = id => () => {
    if (window.confirm(`DO YOU TRULY WISH TO PURGE USER #${id} FROM OUR RECORDS??`)) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(err => console.err(`Person #${id} was not known to begin with!`))
    }
  }
  
  const onNameFilterChange = (event) => setNameFilter(event.target.value)

  const onNameChange = (event) => setNewName(event.target.value)
  
  const onNumberChange = (event) => setNewNumber(event.target.value)

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
      <Contacts remove={removePerson} persons={personsToShow} />
    </div>
  );
}

export default App;
