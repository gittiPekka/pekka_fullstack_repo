  import {useState, useEffect} from 'react'
  import FilterForm from './components/FilterForm'
  import Persons from './components/Persons'
  import PersonForm from './components/NewPerson'
  import personActions from './services/persons'

  const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterPersons, setFilterPersons] = useState('')

    useEffect( () => {
      personActions
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
          })
        },[])

    const personAdder = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
      const namesArray = persons.map(person => person.name);
      if (!namesArray.includes(newName)) {
        personActions
        .create(personObject)
          .then(addPerson => {
            setPersons(persons.concat(addPerson))
        })
      } else {
        alert(`${newName} is already added to phonebook`);
      }
      setNewName('');
      setNewNumber('');
    }

    const nameChanger = (event) => {
      setNewName(event.target.value);
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
            newName={newName}
            handleNameChange={nameChanger}
            newNumber={newNumber}
            handleNumberChange={numberChanger}/>
        <h2>Numbers</h2>
        <Persons filterPersons={filterPersons} persons={persons} />     
        </div>
    )
  }
  export default App;