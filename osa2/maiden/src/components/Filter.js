
const Filter = ({ handleFilterInput }) => {

  return (
    <div>
      Filter: <input onChange={handleFilterInput}/>
    </div>
  )
}

export default Filter