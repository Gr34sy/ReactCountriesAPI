import React, { useEffect } from "react";
import {  Outlet, Link } from "react-router-dom";

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
                switch
            </button>
        </header>

        <Outlet/>
        </>
    )
}