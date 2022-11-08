import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState('')



  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
    }, [])
    console.log('render', countries.length, 'countries')
  
    const filter = (event) => {
      setFilterCountries(event.target.value);
    }

  return (
    <div>
        <FilterForm filterCountries={filterCountries} handleFilterChange={filter}/>
        <Countries filterCountries={filterCountries} countries={countries} /> 
    
      </div>
  )
}
export default App;
