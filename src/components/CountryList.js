import React from 'react';
import CountryListItem from '../components/CountryListItem';

const CountryList = ({ countries, onCountryClick }) => {

    const CountryItems = countries.map(( country, index ) => {
        return <CountryListItem onCountryClick={onCountryClick}country={ country } key={ index}/>
    })
    
    return(
        <div>
            <ul>
                {CountryItems}
            </ul>
        </div>
    )   
};

export default CountryList;