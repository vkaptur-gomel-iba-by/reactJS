import React, { useState } from 'react';
import './Card.css';
import Card from './Card';

const Cards = props => {
  const [isViewOnly, setIsViewOnly] = useState(false);
  const clickHandler = () => {
    setIsViewOnly(!isViewOnly);
  };
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        className="view_checkbox"
        onClick={clickHandler}
      />
      <label htmlFor="checkbox">View only</label>
      {props.cards.map(e => {
        return (
          <Card
            key={e.id}
            card={{
              caption: e.caption,
              text: e.text,
              flag: isViewOnly,
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
