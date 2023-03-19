import React, { useEffect, useState} from "react";
import { Link, useParams  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export function Details(){
   const [ countryInfo, setCountryInfo] = useState(null)
   const { country } = useParams();


   //adding ',' to population number
   function changePopulationFormat(population){
        return [...population.toString()].reverse().map((el,i) => i%3===0 ? el + ',' : el).reverse().map((el, i, arr) => i != arr.length-1 && el != ',' ?el : el.replace(',',''))
    }

   //function that gets all properties of nested objects
   function getPropValuesAll(obj, result = []){
    for(let k in obj){
      if(typeof obj[k] !== 'object'){
          result.push(obj[k])
          continue
      }
      getPropValuesAll(obj[k], result)
    }
    return result
  }

   useEffect(() => {
        try{
            fetch(`https://restcountries.com/v3.1/name/${country}?fullText=tr`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                return response[0] 
            })
            .then((data) => {
                const country = {
                    flag: data.flags.svg,
                    flagAlt: data.flags.alt,
                    name: data.name.common,
                    officialName: data.name.official,
                    nativeName: getPropValuesAll(data.name.nativeName)[0],
                    population: changePopulationFormat(data.population),
                    region: data.region,
                    subRegion: data.subregion,
                    capital: data.capital ? `${data.capital}` : data.name.name,
                    tld: typeof data.tld == 'string' ? data.tld : data.tld[0],
                    currencies: getPropValuesAll(data.currencies).map((el) => el + ' ').filter((currency, i)=> i % 2 == 0),
                    languages: getPropValuesAll(data.languages).map((el) => el + ' '),
                    borderCountries: data.borders, //zmienic
                };
                setCountryInfo(country);
                console.log(country);
            });
        }catch(err) {
            console.error(err);
        }

        return setCountryInfo(null);
   }, [])

    return(
        <section className="details">
            <Link to="/" className="details__button"><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
            {countryInfo && <article className="details__container">
                <figure>
                    <img src={countryInfo.flag} alt={countryInfo.flagAlt}/>
                </figure>

                <div className="details__description">
                    <h2 className="details__title">
                        {countryInfo.name}
                    </h2>

                    <div className="description__columns">
                        <div className="clumn__left">
                            <p><span>Native Name:</span>{countryInfo.nativeName}</p>
                            <p><span>Official Name:</span>{countryInfo.officialName}</p>
                            <p><span>Population:</span>{countryInfo.population}</p>
                            <p><span>Region:</span>{countryInfo.region}</p>
                            <p><span>Sub Region:</span>{countryInfo.subRegion}</p>
                            <p><span>Capital:</span>{countryInfo.capital}</p>
                        </div>

                        <div className="clumn__right">
                            <p><span>Top Level Domain:</span>{countryInfo.tld}</p>
                            <p><span>Currencies:</span>{countryInfo.currencies}</p>
                            <p><span>Languages:</span>{countryInfo.languages}</p>
                        </div>
                    </div>

                    <div className="details__border-countries">
                        <p><span>Border Countries:</span> 
                            <Link to="/" className="details__button button--countries">Country</Link>
                            <Link to="/" className="details__button button--countries">Country</Link>
                            <Link to="/" className="details__button button--countries">Country</Link> 
                        </p>
                    </div>
                </div>
            </article>}
        </section>
    )
}