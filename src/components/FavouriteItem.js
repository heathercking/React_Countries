import React from 'react';

const FavouriteCountriesList = ({ country }) => {

    return(
        <tr>
            <td> 
                <img src={country.flags.png} width="50px"/>
            </td>
            <td>{country.name.common}</td> 
        </tr>
    )
}

export default FavouriteCountriesList;