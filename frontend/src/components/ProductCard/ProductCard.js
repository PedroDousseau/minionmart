import React from "react";
import BasicButton from "../../components/BasicButton/BasicButton";
import './ProductCard.css'

export default function ProductCard(props) {
  return (
    <div className="ProductCard_container">
    
        <h3 className="ProductCard_title">{props.title}</h3>

        <div className="ProductCard_minionContainer">
            <div className="ProductCard_outlineSquare"></div>
            <img src={props.img} />
        </div>

    <BasicButton
    color="#FFF"
    bgColor="#0A75BC"
    fullWidth
    >
        Comprar
    </BasicButton>
    </div>
  );
} 