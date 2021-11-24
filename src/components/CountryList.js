import React from 'react';
import CountryListItem from '../components/CountryListItem';

const CountryList = ({ countries }) => {

    const CountryItems = countries.map(( country, index ) => {
        return <CountryListItem country={ country } key={ index}/>
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