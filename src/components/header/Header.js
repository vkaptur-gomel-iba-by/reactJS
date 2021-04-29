import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <div className="header">
      <div className="text1">{props.text}</div>
    </div>
  );
};

export default Header;
