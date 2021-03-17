import React from "react";
import BasicButton from "../../components/BasicButton/BasicButton";
import './ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({product, shopButton}) {

  const renderShopButton = (shopButton ? 
    <Link to={{
    pathname:'/product/' + product.id,
    state: {
    product: product
    }
    }}>
      <BasicButton
      color="#FFF"
      bgColor="#0A75BC"
      fullWidth
      >
      Comprar
      </BasicButton>
    </Link> : 
  '')

  return (
    <div className="ProductCard_container">
    
        <h3 className="ProductCard_title">{product.title}</h3>

        <div className="ProductCard_minionContainer">
            <div className="ProductCard_outlineSquare"></div>
            <img src={product.img} alt="" />
        </div>

    {renderShopButton}

    </div>
  );
} 