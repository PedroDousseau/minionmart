import React, {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsList.css';
import { useShopContext } from "../../contexts/shop";
import { LoadProducts } from '../../api/productsService';
import { VscLoading } from "react-icons/vsc";

export default function ProductsList() {
    
    const { products, setProducts } = useShopContext();
    
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        LoadProducts(setProducts).then(() => {
            setIsLoading(false);
        });

    }, [setProducts])

    const productsList = products.map((product) => {
        return (
            <ProductCard
            shopButton
            key = {product.productId}
            product = {product}
            />
        )
    })

    const renderLoading = (
        <VscLoading className="ProductList_spinIcon" />
    )

    return (
        <div className="ProductsList_container">
            {isLoading ? renderLoading : productsList}
        </div>
    );
} 