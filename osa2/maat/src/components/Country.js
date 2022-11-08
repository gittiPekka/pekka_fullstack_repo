const Country = (props) => {
  return (
    <div>
      {props.country.name.official}
        <button onClick={props.handleInfoChange} value={props.country.name.official}>
          show
        </button>
    </div>
  )
}

export default Country;