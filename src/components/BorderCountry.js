import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function BorderCountry({countryCode}){

    const [borderCountry, setBorderCountry] = useState('');

    useEffect(() => {
        try{
            fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then((response) => response.json())
            .then((response) => setBorderCountry(response[0].name.common))
            .then((response) => console.log(response))
        }catch(err){
            console.error(err);
        }
        
    }, [])
    return(
        <Link to={`/country/${countryCode}`} className="details__button button--countries">{borderCountry}</Link>
    )
}