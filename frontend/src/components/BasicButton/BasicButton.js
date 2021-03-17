import './BasicButton.css';
import React from "react";

export default function BasicButton(props) {
  return (
    <button 
    className="BasicButton_mainContainer" 
    style={{backgroundColor: props.bgColor, color: props.color, width: props.fullWidth ? '100%' : 'max-content'}}
    onClick = {props.onClick}
    >
        {props.children}
    </button>
  );
}