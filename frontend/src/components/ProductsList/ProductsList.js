import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsList.css'

import stuart from "../../assets/products/stuart.png";
import kevin from "../../assets/products/kevin.png";
import bob from "../../assets/products/bob.png";
import dave from "../../assets/products/dave.png";
import phil from "../../assets/products/phil.png";
import jerry from "../../assets/products/jerry.png";


export default function ProductsList() {
    const DEFAULT_DATA = [
        {
            title: "Stuart",
            id: '1',
            img: stuart
        },
        {
            title: "Kevin",
            id: '2',
            img: kevin
        },
        {
            title: "Bob",
            id: '3',
            img: bob
        },
        {
            title: "Dave",
            id: '4',
            img: dave
        },
        {
            title: "Phil",
            id: '5',
            img: phil
        },
        {
            title: "Jerry",
            id: '6',
            img: jerry
        }
    ]

    const products = DEFAULT_DATA.map((product) => {
        return (
            <ProductCard
            key = {product.id}
            title={product.title}
            img={product.img}
            />
        )
    })

    return (
        <div className="ProductsList_container">
            {products}
        </div>
    );
} 