import React from 'react';
import './CountryDetails.css';
import FavouriteItem from '../components/FavouriteItem';

const FavouriteCountriesList = ({ favouriteCountries }) => {
    
    const FavouriteItems = favouriteCountries.map(( country, index ) => {
        return <FavouriteItem country={ country } key={ index }/>
    }) 

    return(
        <div class="Test">
            <p>Hello</p>
        </div>
    )   
}

export default FavouriteCountriesList;