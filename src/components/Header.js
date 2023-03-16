import React, { useEffect } from "react";
import {  Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'

export function Header(){

    useEffect(() => {
        if(localStorage.getItem('darkmode') === 'true'){
            document.querySelector('body').classList.add('darkmode');
        }

    },[])

    function handleDarkmode(){
        document.querySelector('body').classList.toggle('darkmode');

        if(localStorage.getItem('darkmode') === 'true'){
            localStorage.setItem('darkmode','false')
        }else{
            localStorage.setItem('darkmode','true');
        }
    }

    return(
        <>
        <header className="header">
            <Link to="/"><h1 className="header__title">Where in the world?</h1></Link>
            <button className="darkmode-switch" onClick={handleDarkmode}>
                <FontAwesomeIcon icon={faMoonRegular} className="awesomeIcon moon--regular" /> <FontAwesomeIcon className="awesomeIcon moon--solid" icon={faMoonSolid} /><p>Dark Mode</p>
            </button>
        </header>

        <Outlet/>
        </>
    )
}