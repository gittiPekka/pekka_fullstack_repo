const Header = props => <h1>{props.name}</h1>

const Content = props => <ul>{props.content.map(part => <li key={part.id}> {part.name} {part.exercises} </li>)}</ul>


const Course = ({ course }) => {

    const myReducer = (returnValue, currentValue) => 
        returnValue + currentValue.exercises

    const total = course.parts.reduce(myReducer, 0)

    return (
        <div>
            <Header name={course.name} />
            <Content content={course.parts}/>
            {<p><b>total of {total} exercises</b></p>}
        </div>
    )
  }
  
  export default Course