import './BasicButton.css';
import React from "react";
import { VscLoading } from "react-icons/vsc";

export default function BasicButton({
  color,
  bgColor,
  fullWidth,
  onClick,
  isLoading,
  children,
  disabled
}) {
  return (
    <button 
    disabled = {isLoading || disabled}
    className="BasicButton_mainContainer" 
    style={{backgroundColor: bgColor, color: color, width: fullWidth ? '100%' : 'max-content'}}
    onClick = {onClick}
    >
        {isLoading && <VscLoading className="spinIcon" />}
        {!isLoading && children}
    </button>
  );
}