import React, { useState } from 'react';
import './Cards.css';
import Card from './card';

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
      <label htmlFor="checkbox" style={{ position: 'absolute', marginTop: '20px' }}>
        View only
      </label>
      <div>
        {props.cards.map(element => {
          return (
            <Card
              key={element.id}
              card={{
                caption: element.caption,
                text: element.text,
                flag: isViewOnly,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
