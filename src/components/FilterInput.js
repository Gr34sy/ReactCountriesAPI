import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

export function FilterInput({onChange}){
    const [filterInputValue, setFilterInputValue] = useState('');

    function displayRadio(e){
        e.preventDefault();
        document.querySelector('.filter-input__radios').classList.toggle('display-none');
        document.querySelector('.caretDown').classList.toggle('display-none');
        document.querySelector('.caretUp').classList.toggle('display-none');
    }

    function handleFilterChange(e){
        e.preventDefault();
        setFilterInputValue(e.target.value);
    }

    useEffect(() => {
        if(typeof onChange === 'function'){
            onChange(filterInputValue);
        }
    },[filterInputValue])

    return(
        <div className="element filter-input__container">
           <button className="element filter-input__button" onClick={displayRadio}> 
                {filterInputValue ? `${filterInputValue}` : 'Filter by Region'}
                <FontAwesomeIcon icon={faCaretDown} className="filterIcon caretDown display-none"/>
                <FontAwesomeIcon icon={faCaretUp} className="filterIcon caretUp"/>
           </button>
           
           <div className="element filter-input__radios display-none">
            <input type="radio" id="Africa" name="regions" value="Africa" onChange={handleFilterChange} onClick={displayRadio}/>
            <label htmlFor="Africa">Africa</label>

            <input type="radio" id="America" name="regions" value="America" onChange={handleFilterChange} onClick={displayRadio}/>
            <label htmlFor="America">America</label>

            <input type="radio" id="Asia" name="regions" value="Asia" onChange={handleFilterChange} onClick={displayRadio}/>
            <label htmlFor="Asia">Asia</label>

            <input type="radio" id="Europe" name="regions" value="Europe" onChange={handleFilterChange} onClick={displayRadio}/>
            <label htmlFor="Europe">Europe</label>

            <input type="radio" id="Oceania" name="regions" value="Oceania" onChange={handleFilterChange} onClick={displayRadio}/>
            <label htmlFor="Oceania">Oceania</label>

            <input type="radio" id="Default" name="regions" value="" onChange={handleFilterChange} onClick={displayRadio}/>
            <label htmlFor="Default">Default</label>
           </div>
        </div>
        
    )
}