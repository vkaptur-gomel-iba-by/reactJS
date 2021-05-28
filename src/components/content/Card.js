import React, { useState } from 'react';
import './Card.css';

import { VscEdit } from 'react-icons/vsc';

import { IoIosCloseCircleOutline, IoIosSave } from 'react-icons/io';

import classNames from 'classnames';

const Card = props => {
  const [properties, setProperties] = useState(props);
  const [isEditable, setIsEditable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const clickHandler = () => {
    setIsChecked(!isChecked);
  };
  const editHandler = () => {
    setIsEditable(!isEditable);
    if (isChecked) {
      clickHandler();
    }
  };

  const saveHandler = () => {
    let newCaption = document.getElementById('captionText').value;
    let newTitle = document.getElementById('titleText').value;
    if (newCaption === '') {
      newCaption = properties.card.caption;
    }

    if (newTitle === '') {
      newTitle = properties.card.text;
    }
    const card = {
      card: {
        caption: newCaption,
        text: newTitle,
      },
    };
    setProperties(card);
    editHandler();
  };

  return (
    <div
      className={classNames(
        'card',
        `card${isChecked ? '_highlighted' : '_default'}`,
      )}
    >
      {isEditable ? (
        <div className="header_container">
          <input
            className="caption"
            id="captionText"
            type="text"
            placeholder={properties.card.caption}
          />
          <div className="icon">
            <IoIosSave size="23px" onClick={saveHandler} />
          </div>
          <div className="icon">
            <IoIosCloseCircleOutline size="23px" onClick={editHandler} />
          </div>
        </div>
      ) : (
        <div className="header_container">
          <div className="caption">{properties.card.caption}</div>
          <div className="edit_icon">
            <VscEdit size="23px" onClick={editHandler} />
          </div>

          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={clickHandler}
          />
          <label htmlFor="checkbox" />
        </div>
      )}
      <hr />
      {isEditable ? (
        <input
          size="100px"
          className="title"
          id="titleText"
          type="text"
          placeholder={properties.card.text}
        />
      ) : (
        <p className="title">{properties.card.text}</p>
      )}
    </div>
  );
};

export default Card;
