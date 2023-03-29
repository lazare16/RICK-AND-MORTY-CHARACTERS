import React from 'react';
import '../classes/card.css';

const Card = ({id, name, status, gender, location, origin, species}) =>{
    return(
      <div className='card'>
        <div className="image-container">
         <img src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} alt={name}/>
        </div>
        <div className='info'>
          <h1>{name}</h1>
          <p>{status == 'Alive'? <span className='Alive'></span> : status == 'Dead' ? <span className='Dead'></span> : <span className='Uknown'></span>  } <span style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>{status}</span> - {species}</p>
          <p><span style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>Last known location:</span> {location.name}</p>
          <p><span style={{fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>Origin:</span> {origin.name}</p>
        </div>
      </div>
    );
  }
  

export default Card;


