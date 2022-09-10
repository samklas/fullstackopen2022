import axios from "axios"
import { useState, useEffect } from "react"
import Filter from "./components/Filter"
import Countries from "./components/Countries"



const App = () => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  const handleFilterInput = (e) => {
    setFilter(e.target.value)
  }

  

  return (
    <div>
      <Filter handleFilterInput={handleFilterInput}/>
      <Countries data={data} filter={filter}/>
    </div>
  )
}

export default App