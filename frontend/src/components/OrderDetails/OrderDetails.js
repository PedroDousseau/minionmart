import React from 'react';
import './OrderDetails.css'

export default function OrderDetails(props) {

    const orderList = props.order.map((item) => {
        return (
            <p 
            className = "OrderDetails_orderRow"
            key = {item.product.id}
            >
                {item.amount}x {item.product.title}
            </p>
        )
    })

    return (
        <div className="OrderDetails_container">
            <p className="OrderDetails_title">Detalhes da compra:</p>
            {orderList}
        </div>
    )
}