import React, { useState } from 'react';
import './Cards.css';
import Card from './card';
import Checkbox from './Checkbox';

const Cards = props => {
  const [isViewOnly, setIsViewOnly] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const clickHandler = () => {
    setIsChecked(!isChecked);
    setIsViewOnly(!isViewOnly);
  };
  return (
    <>
      <label>
        <Checkbox checked={isChecked} onChange={clickHandler} />
        <span className="span">View only</span>
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
    </>
  );
};

export default Cards;
