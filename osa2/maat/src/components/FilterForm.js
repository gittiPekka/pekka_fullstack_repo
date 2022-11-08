const FilterForm = (props) => {
    return (
    <div>
        find countries
        <input
        value={props.filterCountries}
        onChange={props.handleFilterChange}
        />
    </div>     
  
    )
  }
  
  export default FilterForm;