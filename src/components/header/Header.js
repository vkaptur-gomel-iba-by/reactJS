import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <div className="header">
      <div className="headerText">{props.text}</div>
    </div>
  );
};

export default Header;
