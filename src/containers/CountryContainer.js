import React, {useEffect, useState} from 'react';
import CountryList from '../components/CountryList';

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
        <div>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <CountryList onCountryClick={onCountryClick} countries={countries} />
                </tbody>
            </table>


                {/* <p>I am country container</p>
                <CountryList onCountryClick={onCountryClick} countries={countries} /> */}
        </div>

    )
}

export default CountryContainer;