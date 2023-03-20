import React, { useEffect, useState} from "react";
import { Link, useParams  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {BorderCountry} from "./BorderCountry";

export function Details(){
   const [ countryInfo, setCountryInfo] = useState(null)
   const [rerenderDetails, setRerenderDetails] = useState(0);

   const { country } = useParams();


   //adding ',' to population number
   function changePopulationFormat(population){
        return [...population.toString()].reverse().map((el,i) => i%3===0 ? el + ',' : el).reverse().map((el, i, arr) => i !== arr.length-1 && el !== ',' ?el : el.replace(',',''))
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

  //getting tld
  function getTLD(data){
    if(typeof data === 'string'){
        return data;
    }else if(Array.isArray(data)){
        return data[0];
    }else{
        return 'none';
    }
  }

  //rerender function
  function handleRerender(){
    setRerenderDetails((prevState) => !prevState);
  }

   useEffect(() => {
        try{
            fetch(`https://restcountries.com/v3.1/alpha/${country}`)
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
                    tld: getTLD(data.tld),
                    currencies: getPropValuesAll(data.currencies).map((el) => el + ' ').filter((currency, i)=> i % 2 === 0),
                    languages: getPropValuesAll(data.languages).map((el) => el + ' '),
                    borderCountries: data.borders, //zmienic
                };
                setCountryInfo(country);
                console.log(country);
            });
        }catch(err) {
            console.error(err);
        }

        return () => setCountryInfo(null);
   }, [rerenderDetails]);

    return(
        <section className="details">
            <Link to="/" className="details__button"><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
            {countryInfo && <article className="details__container">
                <figure>
                    <img src={countryInfo.flag} alt={countryInfo.flagAlt} className="details__flag"/>
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
                            {countryInfo.borderCountries.map((country, i) => {
                                return <BorderCountry key={i} countryCode={country} rerender={handleRerender}/>
                            })}
                        </p>
                    </div>
                </div>
            </article>}
        </section>
    )
}