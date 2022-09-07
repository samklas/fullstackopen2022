
const PersonForm = ({ handleName, handleNumber, newPerson }) => {
  return (
    <form>
      <div>name: <input onChange={handleName}/></div>
      <div>number: <input onChange={handleNumber}/></div>
      <button onClick={newPerson} type="submit">add</button>
    </form>
  )  
}


export default PersonForm