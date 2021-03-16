import React from "react";
import './NotFound.css'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="NotFound_container">
      <p>Desculpe, a página não foi encontrada!</p>
      <Link className="NotFound_homeLabel" to="/">Ir para Home</Link>  
    </div>
  );
}
