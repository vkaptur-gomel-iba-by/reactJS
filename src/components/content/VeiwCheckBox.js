import React from 'react';
import './ViewCheckBox.css';
import { useDispatch } from 'react-redux';

const setFlag = () => {
  return {
    type: 'changeFile',
  };
};

const ViewCheckBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        className="viewCheckBox"
        id="viewCheckBox"
        onChange={() => {
          dispatch(setFlag());
        }}
      />
      <label htmlor="viewCheckBox">View only</label>
    </div>
  );
};

export default ViewCheckBox;
