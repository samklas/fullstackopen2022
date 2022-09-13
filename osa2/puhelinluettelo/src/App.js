import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import personService from './services/persons'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  //Gets all the persons from the phonebook
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  //Removes person from the phonebook by the id
  const removePerson = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id != id))
      })
    }
  }

  // Add new person to the phonebook. If the person is already added, the program will notificate
  const newPerson = (e) => {
    e.preventDefault()
    const person = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.find(element => element.name === person.name)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
        .create(person)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
  }

  //Tracks "name" -input
  const handleName = (e) => {
    console.log(newName)
    setNewName(e.target.value)
  }

  //Tracks "number" -input
  const handleNumber = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)

  }

  // Tracks "filter" -input
  const handleFilter = (e) => {
    e.preventDefault()
    setNewFilter(e.target.value)
  }
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm handleName={handleName} handleNumber={handleNumber} newPerson={newPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} removePerson={removePerson}/>
    </div>
  )

}

export default App