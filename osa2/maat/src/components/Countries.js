import Country from './Country'

const Countries = (props) => {
    const countriesToShow = props.countries.filter(country => country.name.official.includes(props.filterCountries));
    if (countriesToShow.length === 1) {
        console.log("countriesToShow[0].flags.pgn: ", countriesToShow[0].flags.png)
        return (
            <div>
            <h2>{countriesToShow[0].name.official}</h2>
            capital {countriesToShow[0].capital[0]}<br/>
            area {countriesToShow[0].area}
            <h4>languages:</h4>
            {Object.values(countriesToShow[0].languages).map(language => <li key={language}>{language}</li>)}
            <img src={countriesToShow[0].flags.png} alt="flag"/>
            </div>
        )
    } else if (countriesToShow.length < 10) {
    return (
        <div>
        {countriesToShow.map(country =>
         <Country key={country.name.official} country={country} />)}
        </div>
    )
    } else return "Too many countries, specify another filter";
}
    
  export default Countries;