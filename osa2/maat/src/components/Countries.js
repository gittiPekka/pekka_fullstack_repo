import {useState, useEffect} from 'react'
import Country from './Country'

const Countries = (props) => {
    const [countryToBeShown, setCountryToBeShown] = useState('');
    const [weather, setWeather] = useState([]);

    const getInfo = (event) => {
        let name = "";
        for (let i=0; i < event.target.value.length; i++) {
            name += event.target.value[i];
        }
        setCountryToBeShown(name);
    }

    let countriesToShow;
    let latitude;
    let longitude;

    if (countryToBeShown) {
        countriesToShow = props.countries.filter(country => country.name.official === countryToBeShown);
    } else {
        countriesToShow = props.countries.filter(country => country.name.official.includes(props.filterCountries));
    }

    if (countriesToShow.length > 0) {
        latitude = countriesToShow[0].capitalInfo.latlng[0];
        longitude = countriesToShow[0].capitalInfo.latlng[1];
    }

    useEffect(() => {
        if (latitude && longitude) {
                fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&hourly=temperature_2m,windspeed_10m")
                .then((response) => response.json())
                .then((data) => {
                    let result = []
                    result.push(data.hourly.temperature_2m[0]);
                    result.push(data.hourly.windspeed_10m[0]);
                    setWeather(result);
                })
            } else {
                    setWeather([]);
            }
        }, [latitude, longitude]);


    if (countriesToShow.length === 1) {
        return (
            <div>
            <h2>{countriesToShow[0].name.official}</h2>
            capital {countriesToShow[0].capital[0]}<br/>
            area {countriesToShow[0].area}
            <h4>languages:</h4>
            {Object.values(countriesToShow[0].languages).map(language => <li key={language}>{language}</li>)}
            <img src={countriesToShow[0].flags.png} alt="flag"/>
            <h2>Weather in {countriesToShow[0].capital[0]}</h2>
            temperature {weather[0]} Celsius
           <br/>
            wind {weather[1]} m/s
            </div>
        )
    } else if (countriesToShow.length < 10) {
    return (
        <div>
        {countriesToShow.map(country =>
         <Country key={country.name.official} country={country} handleInfoChange={getInfo}/>)}
        </div>
    )
    } else return "Too many countries, specify another filter";
}
    
  export default Countries;