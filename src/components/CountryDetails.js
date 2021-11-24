import React from 'react';
import './CountryDetails.css';

const CountryDetails = ({ country }) => {
    return(
        <div class="Test">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{country.name.common}</td>
                        <td>{country.population.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;