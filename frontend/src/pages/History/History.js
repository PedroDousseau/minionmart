import React, { useState, useEffect } from 'react';
import { loadUserOrders } from '../../api/ordersService';
import './History.css';
import { useShopContext } from '../../contexts/shop';
import { useAuthContext } from '../../contexts/auth';
import { useHistory } from 'react-router';
import { VscLoading } from "react-icons/vsc";

export default function History() {

    const { userOrders, setUserOrders } = useShopContext();
    const { isAuthenticated } = useAuthContext();

    const [isLoading, setIsLoading] = useState(true);

    const history = useHistory();


    useEffect(() => {
        if(!isAuthenticated) {
            history.replace('/login');
            return false;
        }

        loadUserOrders(setUserOrders)
        .then(() => {
            setIsLoading(false);
        })
    }, [setUserOrders, isAuthenticated, history]);


    const renderOrderList = userOrders.map((order) => {
        const orderDate = new Date(order.createdAt);

        const orderDetails = order.items.map((item) => {
            return (
                <p className="History_itemLabel" key={order.orderId + item.product.name}>- {item.amount}x {item.product.name}</p>
            );
        });

        return (
            <div key={order.orderId} className="History_orderCard">

                <div className="History_orderDate">
                    <p className="History_dayLabel">{orderDate.getDate()}</p> 
                    <p className="History_monthLabel">{orderDate.toLocaleString('default', { month: 'short' })}</p>
                </div>

                <div className="History_orderDetails">
                    <strong>Detalhes do pedido:</strong>
                    {orderDetails}
                </div>

            </div>
        );
    });
    

    const renderLoading = (
        <VscLoading className="ProductList_spinIcon" />
    );

    return (
        <div className="History_container">
            <div className="History_title">Histórico</div>
            {isLoading ? renderLoading : renderOrderList}
        </div>
    );
}