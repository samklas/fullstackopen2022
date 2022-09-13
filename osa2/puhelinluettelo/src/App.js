import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import Notification from './Components/Notification'
import personService from './services/persons'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

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
          setNotification(`${returnedPerson.name} added to phonebook`)
        })
        setTimeout(() => {
          setNotification(null)
        }, 3000)
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
      <Notification notification={notification}/>
      <Filter handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm handleName={handleName} handleNumber={handleNumber} newPerson={newPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} removePerson={removePerson}/>
    </div>
  )

}

export default App