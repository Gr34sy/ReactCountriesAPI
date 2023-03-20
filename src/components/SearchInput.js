import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export function SearchInput({onChange}){


    function handleSearchChange(e){
        e.preventDefault();
        
        if( typeof onChange === 'function'){
            onChange(e);
        }
    }

    return(
        <div className="element search-input__container">
            <div className="search-input__icon">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
            <input type="text" className="element search-input__input" onChange={handleSearchChange}/>
        </div>
    )
}