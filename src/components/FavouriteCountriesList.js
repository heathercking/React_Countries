import React from 'react';
import './CountryDetails.css';
import FavouriteItem from '../components/FavouriteItem';

const FavouriteCountriesList = ({ favouriteCountries }) => {
    
    const FavouriteItems = favouriteCountries.map(( country, index ) => {
        return <FavouriteItem country={ country } key={ index }/>
    }) 

    return(
        <div>
            <ul>
                {favouriteCountries}
            </ul>
        </div>
    )   
}

export default FavouriteCountriesList;