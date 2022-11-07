import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'
import PersonForm from './components/NewPerson'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])
    console.log('render', persons.length, 'persons')
  
  const personAdder = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber
    }

    const namesArray = persons.map(person => person.name);
    if (!namesArray.includes(newPerson)) {
      setPersons(persons.concat(personObject));
    } else {
      alert(`${newPerson} is already added to phonebook`);
    }

    setNewPerson('');
    setNewNumber('');
  }
  const personChanger = (event) => {
    setNewPerson(event.target.value);
  }
  const numberChanger = (event) => {
    setNewNumber(event.target.value);
  }
  const filter = (event) => {
    setFilterPersons(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterForm filterPersons={filterPersons} handleFilterChange={filter}/>
      <h2>add a new</h2>
        <PersonForm addPerson={personAdder}
          newPerson={newPerson}
          handlePersonChange={personChanger}
          newNumber={newNumber}
          handleNumberChange={numberChanger}/>
      <h2>Numbers</h2>
       <Persons filterPersons={filterPersons} persons={persons} />     
      </div>
  )
}
export default App;