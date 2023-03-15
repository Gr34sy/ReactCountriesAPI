import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Details(nation){
    // useEffect(() => {
    //     document.querySelector('body').classList.toggle('darkmode');
    // },[])

    return(
        <section className="header">
            {nation}
        </section>
    )
}