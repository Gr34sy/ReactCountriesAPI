import React, { useEffect, useState } from "react";
import {  Outlet, Link } from "react-router-dom";

export function Header(){
    const [darkmode, setDarkmode] = useState('')

    useEffect(() => {
        setDarkmode(localStorage.getItem('darkmode'));
        if(darkmode){
            document.querySelector('body').classList.add('darkmode');
        }

    },[])

    function handleDarkmode(){
        document.querySelector('body').classList.toggle('darkmode');
        setDarkmode((prevState) => !prevState);
        localStorage.setItem('darkmode', darkmode);
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