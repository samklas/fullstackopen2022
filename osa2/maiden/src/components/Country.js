
const Country = ({ data}) => {

  console.log('Country component: ', data)

return (
  <div>
     {data.name.common}
  </div>
)
}

export default Country