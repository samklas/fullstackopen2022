import Persons from './Components/Persons'
import PersonForm from './Components/PersonForm'
import Filter from './Components/Filter'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040 000000',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleName = (e) => {
    console.log(newName)
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)

  }

  const handleFilter = (e) => {
    e.preventDefault()
    setNewFilter(e.target.value)
  }

  console.log(newFilter)
 

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
      setPersons(persons.concat(person))
    }
  }

 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm handleName={handleName} handleNumber={handleNumber} newPerson={newPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter}/>
    </div>
  )

}

export default App