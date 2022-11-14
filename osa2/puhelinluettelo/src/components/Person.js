const Person = (props) => {
  // console.log("Person id oli:", props.person.id);
  return (
    <li>
      {props.person.name} {props.person.number}
      <span> <button id={props.person.id} onClick={props.removePerson}>delete</button></span>
    </li>
  )
}

export default Person;