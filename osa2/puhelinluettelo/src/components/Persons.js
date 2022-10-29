import Person from './Person'

const Persons = (props) => {
    const personsToShow = props.persons.filter(person => person.name.includes(props.filterPersons));
    return (
        <ul>
        {personsToShow.map(person =>
         <Person key={person.name} person={person} />)}
        </ul>
  )}
  
  export default Persons;