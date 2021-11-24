import React from 'react';

const FavouriteCountriesList = ({ country }) => {

    return(
        <tr>
            <td> 
                <p>flag</p>
                {/* <img src={country.flags.png} width="50px"/> */}
            </td>
            {/* <td>{country.name.common}</td>  */}
            <td>country name</td> 

        </tr>
    )
}

export default FavouriteCountriesList;