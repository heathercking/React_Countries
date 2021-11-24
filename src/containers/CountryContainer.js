import React, {useEffect, useState} from 'react';
import CountryDetails from '../components/CountryDetails';
import CountryList from '../components/CountryList';
import '../../src/App.css'

const CountryContainer = ({country}) => {

    const [ countries, setCountires ] = useState( [] )
    const [ selectedCountry, setSelectedCountry ] = useState( null ) 

    useEffect(() => {
        getCountries();
    },[])
    
    const onCountryClick = function(country) {
        setSelectedCountry(country);
        console.log(country)
    }

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountires(countries))
    }

    return(
        <div className="container">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <CountryList onCountryClick={onCountryClick} countries={countries} />
                    {selectedCountry ? <CountryDetails country={selectedCountry}/> : null}
                </tbody>
            </table>
            


                {/* <p>I am country container</p>
                <CountryList onCountryClick={onCountryClick} countries={countries} /> */}
        </div>

    )
}

export default CountryContainer;