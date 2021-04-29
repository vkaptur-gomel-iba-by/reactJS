import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card">
      <div className="text2">{props.card.caption}</div>
      <hr></hr>
      <p className="title">{props.card.text}</p>
    </div>
  );
};

export default Card;
