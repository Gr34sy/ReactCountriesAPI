import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function FilterInput(){
    const [filterInputValue, setFilterInputValue] = useState('');

    function displayRadio(){
        document.querySelector('.filter-input__radios').classList.toggle('display-none');
    }

    function handleFilterChange(e){
        e.preventDefault();
        setFilterInputValue(e.target.value);

        displayRadio();
    }

    return(
        <div className="element filter-input__container">
           <button className="element filter-input__button" onClick={displayRadio}> 
                Filter by Region 
           </button>
           
           <div className="element filter-input__radios display-none">
            <input type="radio" id="Africa" name="regions" value="Africa" onChange={handleFilterChange}/>
            <label htmlFor="Africa">Africa</label>

            <input type="radio" id="America" name="regions" value="America" onChange={handleFilterChange}/>
            <label htmlFor="America">America</label>

            <input type="radio" id="Asia" name="regions" value="Asia" onChange={handleFilterChange}/>
            <label htmlFor="Asia">Asia</label>

            <input type="radio" id="Europe" name="regions" value="Europe" onChange={handleFilterChange}/>
            <label htmlFor="Europe">Europe</label>

            <input type="radio" id="Oceania" name="Oceania" value="Oceania" onChange={handleFilterChange}/>
            <label htmlFor="Oceania">Oceania</label>

            <input type="radio" id="Default" name="Default" value="" onChange={handleFilterChange}/>
            <label htmlFor="Default">Default</label>
           </div>
        </div>
        
    )
}