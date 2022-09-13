import Person from "./Person"

const Persons = ({ persons, newFilter, removePerson }) => {
  return (
    <div>
       {persons.map(person => person.name.toUpperCase().includes(newFilter.toUpperCase()) ? <Person key={person.id} person={person} removePerson={removePerson}/> : ' ')}
    </div>
  )
}

export default Persons
