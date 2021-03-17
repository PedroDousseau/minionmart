import React, {useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsList.css';
import { useShopContext } from "../../contexts/shop";
import { LoadProducts } from '../../api/productsService';

export default function ProductsList() {
    
    const { products, setProducts } = useShopContext();

    useEffect(() => {
        LoadProducts(products, setProducts);
    }, [])

    const productsList = products.map((product) => {
        return (
            <ProductCard
            shopButton
            key = {product.id}
            product = {product}
            />
        )
    })

    return (
        <div className="ProductsList_container">
            {productsList}
        </div>
    );
} 