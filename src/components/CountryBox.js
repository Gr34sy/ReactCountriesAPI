import React from "react";

export function CountryBox({flag, name, officialName, population, region, capital}){

    return(
        <div className="element">
            {name}
            Official Name: {officialName}
            Population: {population}
            Region: {region}
            Capital: {capital}
        </div>
    )
}