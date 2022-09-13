import SingleCountry from "./SingleCountry"
import Country from "./Country"


const Countries = ({ data, filter }) => {

  console.log(filter)
  const filteredData = data.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))


  if (filteredData.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }
  if (filteredData.length === 1) {
    return (
      <SingleCountry data={filteredData[0]}/>
    )
  }
  else {
    return (
    <div>
     {filteredData.map((country, i) => <Country key={i} data={country}/>)}
    </div>
    )
    }
  }


export default Countries