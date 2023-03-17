import React, {useEffect, useState} from "react";

import { CountryBox } from "./CountryBox";

export function HomePage(){
    const [countries,setCountries] = useState([]);

    useEffect(() => {
        // try{
        //     const query = fetch('https://restcountries.com/v3.1/all', {
        //     })
        //         .then((response) => response.json())
        //         .then((data) => data.map((country) => {
        //             return {
        //                 name: country.name.common,
        //                 officialName: country.name.official,
        //                 population: country.population,
        //                 region: country.region,
        //                 capital: country.capital ? `${country.capital}` : country.name,
        //             } 
        //         }))
        //         .then((mappedData) => setCountries(mappedData))
        //         .then(() => console.log(countries));
        //         // .then(console.log(countries));
        // }catch(error){
        //     console.error(error);
        // }

    }, [])

    return(
        <main className="hero">
            <div className='wrapper'>
                {/* {countries.map((country, i) => (<CountryBox
                key={i}
                name={country.name} 
                officialName={country.officialName}
                population={country.population}
                region={country.region}
                capital={country.capital}
                />)
                )} */}

                <CountryBox/>
                <CountryBox/>
                <CountryBox/>
                <CountryBox/>
                <CountryBox/>
                <CountryBox/>
            </div>
        </main>
    )
}