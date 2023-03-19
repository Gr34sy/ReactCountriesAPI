import React from "react";
import { Link } from "react-router-dom";

export function CountryBox({flag, flagAlt, name, officialName, population, region, capital}){

    return(
        <Link to={`/country/${name}`} className="element country-box">
            <img className="country__flag" src={flag} alt={flagAlt}/>

            <h2 className="country__name">
                {name}
            </h2>

            <div className="country__description">
                <p>
                    <span>Official name:</span> {officialName}
                </p>

                <p>
                    <span>Population:</span> {population}
                </p>

                <p>
                    <span>Region:</span> {region}
                </p>
                
                <p>
                    <span>Capital:</span> {capital}
                </p>
            </div>
        </Link>
    )
}