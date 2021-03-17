import React from 'react';
import './CartProductCard.css';
import ProductCard from '../ProductCard/ProductCard';
import BasicButton from '../BasicButton/BasicButton';
import { useShopContext } from '../../contexts/shop';
import { AddToCart, RemoveFromCart } from '../../api/cartService';

export default function CartProductCard({
        item
    }) {

    const { userCart, setUserCart } = useShopContext();

    const maxItens = 9;
    const options = [];

    for (let i = 1; i <= maxItens; i++) { options.push(i); }

    const selectOptions = options.map((index) => {
        return (
            <option key={index} value={index}>{index}</option>
        )
    })

    return (
        <div className="CartProductCard_container">
            <ProductCard
            key = {item.product.id}
            product = {item.product}
            />

            <div className="CartProductCard_amountRow">
                <div>Quantidade:</div>
                <select 
                defaultValue={item.amount} 
                className="CartProductCard_select"
                onChange={(e) => {AddToCart(userCart, setUserCart, item.product, parseInt(e.target.value))}} 
                >
                    {selectOptions}
                </select>
            </div>
            <BasicButton
            fullWidth
            color = "#231F20"
            bgColor = "#FCE029"
            onClick = {() => {RemoveFromCart(userCart, setUserCart, item.product)}}
            >
                Remover
            </BasicButton>
        </div>
    )
}