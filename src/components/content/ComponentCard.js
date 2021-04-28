import React from 'react';
import './ComponentCard.css';


const CardComponent = (props) => {
    return(
        <div className="card">
        <text2>{props.card.caption}</text2>
          <hr></hr>
          <p className="title">{props.card.text}</p>
        </div>
          )
}

export default CardComponent;