import React, { useEffect} from "react";
import { Link, useParams  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export function Details(){
   const { country } = useParams();

    return(
        <section className="details">
            <Link to="/" className="details__button"><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
            <article className="details__container">
                <figure>
                    
                </figure>

                <div className="details__description">
                    <h2 className="details__title">
                        Belgium
                    </h2>

                    <div className="description__columns">
                        <div className="clumn__left">
                            <p><span>Native Name:</span>Name</p>
                            <p><span>Official Name:</span>Name</p>
                            <p><span>Population:</span>Population</p>
                            <p><span>Region:</span>Region</p>
                            <p><span>Sub Region:</span>Sub Region</p>
                            <p><span>Capital:</span>Capital</p>
                        </div>

                        <div className="clumn__right">
                            <p><span>Top Level Domain:</span>.be</p>
                            <p><span>Currencies:</span>Currencies</p>
                            <p><span>Languages:</span>Languages</p>
                        </div>
                    </div>

                    <div className="details__border-countries">
                        <p><span>BorderCountries:</span> 
                            <Link to="/" className="details__button button--countries">Country</Link>
                            <Link to="/" className="details__button button--countries">Country</Link>
                            <Link to="/" className="details__button button--countries">Country</Link> 
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}