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

library.add(fab, faGithubAlt);



function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

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
    };

    fetchData();
  }, []);

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return !data.length ? (
    <ReactLoading type={'spin'} color={'#333'} height={50} width={50} className="loader"/>
  ) : (
    <>
      <header>
        <Search searchChange={onSearch} />
        <a href="https://github.com/lazare16"><FontAwesomeIcon icon={["fab", "github-alt"]}  className="icon"/></a>
      </header>
      <main>
        {searchValue && <CardList data={filteredData} />}
        <Button />
      </main>
    </>
  );
}

export default App;
