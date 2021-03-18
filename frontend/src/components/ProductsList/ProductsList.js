import React, {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsList.css';
import { useShopContext } from "../../contexts/shop";
import { LoadProducts } from '../../api/productsService';

export default function ProductsList() {
    
    const { products, setProducts } = useShopContext();
    
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        LoadProducts(setProducts);
        setIsLoading(false);
    }, [])

    const productsList = products.map((product) => {
        return (
            <ProductCard
            shopButton
            key = {product.productId}
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