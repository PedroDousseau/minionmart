import React from 'react';
import { useShopContext } from '../../contexts/shop';
import CartProductCard from '../CartProductCard/CartProductCard';
import './CartProductList.css';

export default function CartProductList() {

    const { userCart } = useShopContext();

    const productsList = userCart.map((item) => {
        return (
            <CartProductCard
            key = {item.product.id}
            item = {item}
            />
        )
    })

    return (
        <div className="CartProductList_container">
            {productsList}
        </div>
    )
}