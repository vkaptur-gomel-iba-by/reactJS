import React, { useState } from 'react';
import './Card.css';

import { VscEdit } from 'react-icons/vsc';

import { IoIosCloseCircleOutline, IoIosSave } from 'react-icons/io';

import classNames from 'classnames';

const Card = props => {
  const [properties, setProperties] = useState(props);
  const [isEditable, setIsEditable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [enteredCaption, setEnteredCaption] = useState('');
  const [enteredText, setEnteredText] = useState('');

  const clickHandler = () => {
    setIsChecked(!isChecked);
  };

  const editHandler = () => {
    setIsEditable(!isEditable);
    if (isChecked) {
      clickHandler();
    }
  };

  if (props.card.flag && isEditable) {
    editHandler();
  }

  const changeTextHandler = event => {
    setEnteredText(event.target.value);
  };

  const changeCaptionHandler = event => {
    setEnteredCaption(event.target.value);
  };

  const saveHandler = () => {
    let newCaption = enteredCaption;
    let newTitle = enteredText;

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
    setEnteredText('');
    setEnteredCaption('');
  };

  return (
    <div
      className={classNames(
        'card',
        `card${isChecked ? '_highlighted' : '_default'}`,
      )}
    >
      {isEditable && !props.card.flag ? (
        <div className="header_container">
          <input
            defaultValue={properties.card.caption}
            className="caption"
            id="captionText"
            type="text"
            onChange={changeCaptionHandler}
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
            {!props.card.flag ? (
              <div className="edit_icon">
                <VscEdit size="23px" onClick={editHandler} />
              </div>
            ) : (
              <div className="edit_icon_hidden">
                <VscEdit size="23px" onClick={editHandler} />
              </div>
            )}

            <input type="checkbox" className="checkbox" onClick={clickHandler} />
          </div>
        </div>
      )}
      <hr />
      {isEditable && !props.card.flag ? (
        <input
          defaultValue={properties.card.text}
          size="100px"
          className="title"
          id="titleText"
          type="text"
          onChange={changeTextHandler}
        />
      ) : (
        <p className="title">{properties.card.text}</p>
      )}
    </div>
  );
};

export default Card;
