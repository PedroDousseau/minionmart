import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import './ProductsSection.css'

export default function ProductsSection() {
  return (
    <div name="productsSection" className="ProductsSection_container">
        <h2 className="ProductsSection_title">Produtos</h2>

    <ProductsList/>
    </div>
  );
} 