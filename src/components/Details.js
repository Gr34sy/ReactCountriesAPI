import React, { useEffect} from "react";
import { Link, useParams  } from "react-router-dom";

export function Details(){
   const { country } = useParams();

    return(
        <section className="details">
            {country}
        </section>
    )
}