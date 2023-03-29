import React from 'react'
import Card from './Card';
import '../classes/cardList.css'


const CardList = ({data}) =>{
    return(
        <div className='wrap'>
      {
        data.map((user, i) => {
          return (
            <Card
              key={i}
              id={data[i].id}
              name={data[i].name}
              status={data[i].status}
              location={data[i].location}
              origin={data[i].origin}
              species={data[i].species}
              />
          );
        })
      }
    </div>
    );
}

export default CardList;