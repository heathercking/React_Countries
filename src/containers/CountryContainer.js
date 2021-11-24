import React, {useEffect, useState} from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {

    const [ countries, setCountires ] = useState( [] )
    const [ selectedcountry, setSelectedCountry ] = useState( null ) 

    useEffect(() => {
        getCountries();
    },[])
    
    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountires(countries))
    }

    return(
        <div>
                <p>I am country container</p>
                <CountryList countries={countries} />
        </div>

    )
}

export default CountryContainer;