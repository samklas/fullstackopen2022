
const SingleCountry = ({ data }) => {
  console.log('Loggin from Country component: ', data)

  const languages = Object.values(data.languages)
  console.log(languages)

  return (
    <div>
      <h2>{data.name.common}</h2>
      <div>capital: {data.capital[0]}</div>
      <div>area: {data.area} </div>
      <h3>languages:</h3>
      <ul>{languages.map((language, i) => <li key={i}>{language}</li>)}</ul>
      <img src={data.flags.png}></img>
    </div>
  )
}

export default SingleCountry