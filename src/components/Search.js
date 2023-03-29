import React from 'react'
import '../classes/Search.css'

const Search = ({searchValue, searchChange}) =>{
    return(
        <>
          <input type="search"  placeholder='search for characters'  onChange={searchChange}/>
        </>
    );
}

export default Search;