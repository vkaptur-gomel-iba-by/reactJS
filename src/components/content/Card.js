import React, { useState } from 'react';
import './Card.css';

import { VscEdit } from 'react-icons/vsc';

import { IoIosCloseCircleOutline, IoIosSave } from 'react-icons/io';

import classNames from 'classnames';

import { useSelector } from 'react-redux';

const Card = props => {
  const flag = useSelector(state => state.flag);
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
            defaultValue={properties.card.caption}
            className="caption"
            id="captionText"
            type="text"
          />
          <div className="buttons">
            <div className="icon">
              <IoIosSave size="23px" onClick={saveHandler} />
            </div>
            <div className="icon">
              <IoIosCloseCircleOutline size="23px" onClick={editHandler} />
            </div>
          </div>
        </div>
      ) : (
        <div className="header_container">
          <div className="caption">{properties.card.caption}</div>
          <div className="buttons">
            <div className="edit_icon" style={{ display: flag ? 'none' : 'block' }}>
              <VscEdit size="23px" onClick={editHandler} />
            </div>
            <input type="checkbox" className="checkbox" onClick={clickHandler} />
          </div>
        </div>
      )}
      <hr />
      {isEditable ? (
        <input
          defaultValue={properties.card.text}
          size="100px"
          className="title"
          id="titleText"
          type="text"
        />
      ) : (
        <p className="title">{properties.card.text}</p>
      )}
    </div>
  );
};

export default Card;
