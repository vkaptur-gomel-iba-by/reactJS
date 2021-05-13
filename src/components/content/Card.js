import React, { useState } from 'react';
import './Card.css';
import classNames from 'classnames';

const Card = props => {
  const [isChecked, setIsChecked] = useState(false);
  const clickHandler = () => {
    setIsChecked(!isChecked);
  };

  const twoClasses = classNames(
    'card',
    `card${isChecked ? '_highlighted' : '_default'}`,
  );
  return (
    <div className={twoClasses}>
      <div className="one_line">
        <div className="caption">{props.card.caption}</div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={clickHandler}
        />
        <label htmlFor="checkbox" />
      </div>
      <hr />
      <p className="title">{props.card.text}</p>
    </div>
  );
};

export default Card;
