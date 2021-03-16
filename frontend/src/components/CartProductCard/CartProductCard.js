import React from 'react';
import './CartProductCard.css';
import ProductCard from '../ProductCard/ProductCard';
import BasicButton from '../BasicButton/BasicButton';

export default function CartProductCard(props) {

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
            key = {props.item.product.id}
            product = {props.item.product}
            />

            <div className="CartProductCard_amountRow">
                <div>Quantidade:</div>
                <select defaultValue={props.item.amount} className="CartProductCard_select">
                    {selectOptions}
                </select>
            </div>
            <BasicButton
            fullWidth
            color = "#231F20"
            bgColor = "#FCE029"
            >
                Remover
            </BasicButton>
        </div>
    )
}