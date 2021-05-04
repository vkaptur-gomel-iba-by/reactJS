import React, { useState } from 'react';
import './Card.css';

const Card = props => {
  const [style, setStyle] = useState(false);
  const clickHandler = () => {
    setStyle(!style);
  };

  return (
    <div className={`card${style.toString()}`}>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={clickHandler}
      />
      <label htmlFor="checkbox" />
      <div className="caption">{props.card.caption}</div>
      <hr />
      <p className="title">{props.card.text}</p>
    </div>
  );
};

export default Card;
