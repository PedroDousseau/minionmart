import React from 'react';
import CartProductCard from '../CartProductCard/CartProductCard';
import './CartProductList.css';

export default function CartProductList(props) {

    const order = props.order;

    const productsList = order.map((item) => {
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