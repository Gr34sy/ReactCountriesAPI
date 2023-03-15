import React, { useEffect } from "react";
import {  Outlet, Link } from "react-router-dom";

export function Header(){
    // useEffect(() => {
    //     document.querySelector('body').classList.toggle('darkmode');
    // },[])

    return(
        <>
        <header className="header">
            <Link to="/"><h1 className="header__title">Where in the world?</h1></Link>
            <button className="darkmode-switch" onClick={() => document.querySelector('body').classList.toggle('darkmode')}>
                switch
            </button>
        </header>

        <Outlet/>
        </>
    )
}