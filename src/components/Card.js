import React, { useState } from 'react';
import '../classes/card.css';






const Card = ({ id, name, status,location, origin, species, episode }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const episodeLinks = episode.map(getEpisodeLink);

  function getEpisodeLink(episodeLink) {
    if (!episodeLink) {
      return null;
    }
    const episodeNumber = parseInt(episodeLink.split('/').pop()); // extract episode number from the link
    let season = 1;
    if (episodeNumber > 11 && episodeNumber <= 21) {
      season = 2;
    } else if (episodeNumber > 21 && episodeNumber <= 31) {
      season = 3;
    } else if (episodeNumber > 31 && episodeNumber <= 41) {
      season = 4;
    } else if (episodeNumber > 41) {
      season = 5;
    }
  
    // extract the episode number based on the season number and generate the new link
    let newEpisodeNumber = episodeNumber;
    if (season === 2) {
      newEpisodeNumber = episodeNumber - 11;
    } else if (season === 3) {
      newEpisodeNumber = episodeNumber - 21;
    } else if (season === 4) {
      newEpisodeNumber = episodeNumber - 31;
    } else if (season === 5) {
      newEpisodeNumber = episodeNumber - 41;
    }
    
    return `https://www.adjaranet.com/movies/1000747/Rick-and-Morty?lang=ENG&quality=HD&season=${season}&episode=${newEpisodeNumber}`;
  }

  

  const episodeNumbers = episode.map((episodeLink) => {
    if (!episodeLink) {
      return null;
    }
    const episodeNumber = parseInt(episodeLink.split('/').pop());
    return episodeNumber;
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption !== "") {
      window.open(episodeLinks[selectedOption], '_blank');
    }
  };

  return (
    <div className='card'>
      <div className="image-container">
       <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name}/>
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <p>{status === 'Alive'? <span className='Alive'></span> : status === 'Dead' ? <span className='Dead'></span> : <span className='Uknown'></span>  } <span style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>{status}</span> - {species}</p>
        <p><span style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>Last known location:</span> {location.name}</p>
        <p><span style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>Origin:</span> {origin.name}</p>
        {episodeLinks.length > 0 && (
          <div className='episodes'>
            <p style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>Appears:</p>
            <form onSubmit={handleSubmit} className="form">
              <select id="episodes" name="episodes" value={selectedOption} onChange={handleOptionChange} className="select">
                <option value="" className="options">Select</option>
                {episodeNumbers.map((episodeNumber, index) => (
                  <option key={index} value={index} className="options">{`Episode ${episodeNumber}`}</option>
                ))}
              </select>
              <input type="submit" value="submit"  className='submit'/>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;





