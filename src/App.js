import React, { useState, useEffect } from "react";
import axios from "axios";
import "./classes/App.css";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Button from "./components/Button"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import ReactLoading from 'react-loading';
import Filter from './components/Filter';
import rick from './IMAGES/icons8-rick-sanchez-100.png';

library.add(fab, faGithubAlt);



function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = React.useState('All');


  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let next = "https://rickandmortyapi.com/api/character";
      let newData = [];

      // Loop through all pages
      while (next) {
        const response = await axios.get(next);
        const responseData = response.data;
        // Add results to newData array
        newData = [...newData, ...responseData.results];

        // Set next variable to null if no more pages left
        next = responseData.info.next;
        if (next === "") {
          next = null;
        }
      }

      // Set data state to newData array
      setData(newData);
      console.log(newData);
    };

    fetchData();

    document.title = "Rick and Morty App";
  }, []);

  const onSpeciesFilterChange = (event) => {
    setSelectedSpecies(event.target.value);
  };

  const filteredData = data.filter((character) => {
    switch (selectedSpecies) {
      case 'All':
        return character.name.toLowerCase().includes(searchValue.toLowerCase());
      case 'Alien':
        return (
          character.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          character.species.toLowerCase() === 'alien'
        );
      case 'Human':
        return (
          character.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          character.species.toLowerCase() === 'human'
        );
      case 'Humanoid':
        return (
          character.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          character.species.toLowerCase() === 'humanoid'
        );
      default:
        return (
          character.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          character.species.toLowerCase() === 'unknown'
        );
    }
  });



  if (filteredData.length === 0) {
    return(
      <>
      <header>
        <Search searchChange={onSearch}/>
        <div className="headerContainer">
          <Filter selectedSpecies={selectedSpecies} onSpeciesFilterChange={onSpeciesFilterChange}/>
          <a href="https://github.com/lazare16"><FontAwesomeIcon icon={["fab", "github-alt"]}  className="icon"/></a>
        </div>
      </header>
      <main>
        <div className="noResultWrapper">
          <img src={rick} alt="rick"  id="rick"/>
          <h1 className="NoResult">Result not found</h1>
        </div>
      </main>
    </>
    );
  } else {
    console.log('success');
  }


  


  return !data.length ? (
    <ReactLoading type={'spin'} color={'#333'} height={50} width={50} className="loader"/>
  ) : (
    <>
      <header>
        <Search searchChange={onSearch}/>
        <div className="headerContainer">
          <Filter selectedSpecies={selectedSpecies} onSpeciesFilterChange={onSpeciesFilterChange}/>
          <a href="https://github.com/lazare16"><FontAwesomeIcon icon={["fab", "github-alt"]}  className="icon"/></a>
        </div>
      </header>
      <main>
        {searchValue && <CardList data={filteredData} />}
        <Button />
      </main>
    </>
  );
}

export default App;
