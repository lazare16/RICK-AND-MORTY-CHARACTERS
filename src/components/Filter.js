import React from 'react'
import '../classes/filter1.css';



const Filter = ({selectedSpecies, onSpeciesFilterChange}) =>{
    return(
        <form>
            <select name="species" id="species" value={selectedSpecies} onChange={onSpeciesFilterChange}>
                <option value="All">All species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="unknown">Unknown</option>
            </select>
        </form>
    );
}

export default Filter;

