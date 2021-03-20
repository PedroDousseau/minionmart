import React from "react";
import './Footer.css'
import logo from '../../assets/logo.svg';

export default function Footer(props) {
  return (
    <div className="Footer_container">
      <img src={logo} alt=""/>
      <p className="Fotter_copyright"> Made by Pedro Dousseau © 2021</p>
    </div>
  );
} 