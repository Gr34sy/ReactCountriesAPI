import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export function SearchInput(){

    const [searchInputValue, setSearchInputValue] = useState('');

    function handleSearchChange(e){
        e.preventDefault();
        setSearchInputValue(e.target.value);
    }

    return(
        <div className="element search-input__container">
            <div className="search-input__icon">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>
            <input type="text" className="element search-input__input" onChange={handleSearchChange} value={searchInputValue}/>
        </div>
    )
}