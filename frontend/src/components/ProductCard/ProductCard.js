import React from "react";
import BasicButton from "../../components/BasicButton/BasicButton";
import './ProductCard.css'
import {Link} from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className="ProductCard_container">
    
        <h3 className="ProductCard_title">{props.product.title}</h3>

        <div className="ProductCard_minionContainer">
            <div className="ProductCard_outlineSquare"></div>
            <img src={props.product.img} />
        </div>

<Link to={{
  pathname:'/product/' + props.product.id,
  state: {
    product: props.product
  }
}}>
    <BasicButton
    color="#FFF"
    bgColor="#0A75BC"
    fullWidth
    >
        Comprar
    </BasicButton>
    </Link>
    </div>
  );
} 