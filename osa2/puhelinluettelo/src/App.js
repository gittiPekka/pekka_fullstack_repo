import { useState } from 'react'
import Person from './components/Person'

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
  
 
  const addPerson = (event) => {
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
  const handlePersonChange = (event) => {
    setNewPerson(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilterPersons(event.target.value);
  }

  const personsToShow = persons.filter(person => person.name.includes(filterPersons));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with
          <input
          value={filterPersons}
          onChange={handleFilterChange}
          />
        </div>
        <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newPerson}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          number: 
          <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        
      </form>
      <h2>Numbers</h2>
      <ul>
       {personsToShow.map(person =>
        <Person key={person.name} person={person} />
      )}
      </ul>
      </div>
  )

}

export default App;
