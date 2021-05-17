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
    const newCaption = document.getElementById('captionText').value;
    const newTitle = document.getElementById('titleText').value;
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
    <div>
      {isEditable ? (
        <div
          className={classNames(
            'card',
            `card${isChecked ? '_highlighted' : '_default'}`,
          )}
        >
          <div className="icon_container">
            <input
              className="caption"
              id="captionText"
              type="text"
              placeholder="New caption"
            />
            <div className="save_icon">
              <IoIosSave size="23px" onClick={saveHandler} />
            </div>
            <div className="cancel_icon">
              <IoIosCloseCircleOutline size="23px" onClick={editHandler} />
            </div>
          </div>

          <hr />
          <input
            className="title"
            id="titleText"
            type="text"
            placeholder="New title"
          />
        </div>
      ) : (
        <div
          className={classNames(
            'card',
            `card${isChecked ? '_highlighted' : '_default'}`,
          )}
        >
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

          <hr />
          <p className="title">{properties.card.text}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
