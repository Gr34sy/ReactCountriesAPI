import React, {useEffect, useState} from "react";

import { CountryBox } from "./CountryBox";
import { SearchInput } from "./SearchInput";
import { FilterInput } from "./FilterInput";

export function HomePage(){
    const [countries, setCountries] = useState([]);
    const [countriesAll, setCountriesAll] = useState([]);

    // adding ',' to population number
    function changePopulationFormat(population){
        return [...population.toString()].reverse().map((el,i) => i%3===0 ? el + ',' : el).reverse().map((el, i, arr) => i !== arr.length-1 && el !== ',' ?el : el.replace(',',''))
    }

    useEffect(() => {
        try{
            fetch('https://restcountries.com/v3.1/all', {
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    return response
                })
                .then((data) => data.map((country) => {
                    return {
                        code: country.cca2,
                        name: country.name.common,
                        officialName: country.name.official,
                        population: changePopulationFormat(country.population),
                        region: country.region,
                        capital: country.capital ? `${country.capital}` : country.name.name,
                        flag: country.flags.png,
                        flagAlt: country.flags.alt,
                    } 
                }))
                .then((mappedData) => {
                    setCountries(mappedData);
                    setCountriesAll(mappedData);
                })
        }catch(error){
            console.error(error);
        }

        return setCountries([]);
    }, [])

    function searchChange(e){
        if(e.target.value === '' || e.target.value === ' '){
            setCountries([...countriesAll]);
        }else{
            setCountries(countriesAll.filter((country) => country.name.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }

    function filterChange(inputValue){
        if(inputValue === ''){
            setCountries([...countriesAll])
        }else{
            setCountries(countriesAll.filter((country) => country.region.match(inputValue)));
        }
    }

    return(
        <main className="hero">

            <div className="inputs">
                <SearchInput onChange={searchChange}/>
                <FilterInput onChange={filterChange}/>
            </div>

            <div className='wrapper'>
                {countries.map((country, i) => (<CountryBox
                key={i}
                code={country.code}
                name={country.name} 
                officialName={country.officialName}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
                flagAlt={country.flagAlt}
                />)
                )}

            </div>
        </main>
    )
}