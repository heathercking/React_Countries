import React from 'react';
import './CountryDetails.css';

const CountryDetails = ({ country, onCountryFavouriteClick }) => {

    const handleClick = function(){
        onCountryFavouriteClick(country);
    }

    return(
        <div class="Test">
            <button onClick={handleClick}>Favourite</button>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={country.flags.png} width="50px"/>
                        </td>
                        <td>{country.name.common}</td>
                        <td>{country.population.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;