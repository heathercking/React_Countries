import React, {useEffect, useState} from 'react';
import CountryDetails from '../components/CountryDetails';
import CountryList from '../components/CountryList';
import '../../src/App.css'
import FavouriteCountriesList from '../components/FavouriteCountriesList';

const CountryContainer = ({country}) => {

    const [ countries, setCountires ] = useState( [] )
    const [ selectedCountry, setSelectedCountry ] = useState( null ) 
    const [ favouriteCountries, setFavouriteCountries ] = useState( [])
    // const [ favouriteCountries, setFavouriteCountries ] = useState( [
    //     {
    //         "name" : { "common" : "Afghanistan"},
    //         "population" : 121412512,
    //         "flags" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
    //     }
    // ])

    useEffect(() => {
        getCountries();
    },[])
    
    const onCountryClick = function(country) {
        setSelectedCountry(country);
        console.log(country)
    }

    const onCountryFavouriteClick = function(country) {
        setFavouriteCountries([...favouriteCountries,country]);
        console.log(favouriteCountries)
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
                    {selectedCountry ? <CountryDetails onCountryFavouriteClick={onCountryFavouriteClick} country={selectedCountry}/> : null}
                    <FavouriteCountriesList favouriteCountries={favouriteCountries}/>
                </tbody>
            </table>
            


                {/* <p>I am country container</p>
                <CountryList onCountryClick={onCountryClick} countries={countries} /> */}
        </div>

    )
}

export default CountryContainer;