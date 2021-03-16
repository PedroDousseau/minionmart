import './BasicButton.css';
import React from "react";
import {Button} from 'react-bootstrap';

export default function BasicButton(props) {
  return (
    <Button size="lg" variant="primary" className="BasicButton_mainContainer" style={{backgroundColor: props.bgColor, color: props.color}}>
        {props.children}
    </Button>
  );
}