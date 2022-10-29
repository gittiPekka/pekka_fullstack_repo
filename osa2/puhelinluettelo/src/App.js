import { useState } from 'react'
import FilterForm from './components/FilterForm'
import Persons from './components/Persons'
import PersonForm from './components/NewPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState('')
  
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