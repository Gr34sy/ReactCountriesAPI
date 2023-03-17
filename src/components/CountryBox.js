import React from "react";

export function CountryBox({flag, name, officialName, population, region, capital}){

    return(
        <div className="element country-box">
            <div className="country__flag"></div>

            <h2 className="country__name">
                United states of america
            </h2>

            <div className="country__description">
                <p>
                    <span>Official name:</span> USA
                </p>

                <p>
                    <span>Population:</span> 120990
                </p>

                <p>
                    <span>Region:</span> Dupa
                </p>
                
                <p>
                    <span>Capital:</span> Kutas
                </p>
            </div>
        </div>
    )
}