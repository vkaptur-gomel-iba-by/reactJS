import React from 'react';
import './ComponentHeader.css';


const HeaderComponent = (props) => {
    return(

        <div className="header">
        <div className="text1">
         {props.head.text}
        </div>
        </div>
          )
}

export default HeaderComponent;