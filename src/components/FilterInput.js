import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function FilterInput(){
    const [filterInputValue, setFilterInputValue] = useState('');

    function displayRadio(e){
        e.preventDefault();
        document.querySelector('.filter-input__radios').classList.toggle('display-none');
    }

    function handleFilterChange(e){
        setFilterInputValue(e.target.value);
    }

    return(
        <div className="element filter-input__container">
           <button className="element filter-input__button" onClick={displayRadio}> 
                {filterInputValue ? `${filterInputValue}` : 'Filter by Region'}  
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