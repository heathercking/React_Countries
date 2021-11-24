import React from 'react';

const CountryListItem = ({ country, onCountryClick }) => {

    const handleClick = function(){
        
        onCountryClick(country);
    }

    return(
        <tr>
            <td onClick={handleClick}>{country.name.common}</td>
            <td>{country.population.toLocaleString()}</td>
        </tr>
        // <li onClick={handleClick}><b><span>{country.name.common}:</span></b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Population: {country.population.toLocaleString()}</span></li>
    )
}

export default CountryListItem;