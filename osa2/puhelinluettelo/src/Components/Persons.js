
const Persons = ({ persons, newFilter }) => {
  return (
    <div>
      {persons.map(person => person.name.toUpperCase().includes(newFilter.toUpperCase()) ? <p key={person.id}>{person.name} {person.number}</p> : '')}
    </div>
  )
}

export default Persons