import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function BorderCountry({countryCode, rerender}){

    const [borderCountry, setBorderCountry] = useState('');

    function handleClick(){
        if(typeof rerender === 'function'){
            rerender();
        }
    }

    useEffect(() => {
        try{
            fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then((response) => response.json())
            .then((response) => setBorderCountry(response[0].name.common))
        }catch(err){
            console.error(err);
        }
        
    }, [])
    return(
        <Link to={`/country/${countryCode}`} className="details__button button--countries" onClick={handleClick}>{borderCountry}</Link>
    )
}