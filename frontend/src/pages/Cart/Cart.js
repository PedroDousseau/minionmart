import React from 'react';
import CartProductList from '../../components/CartProductList/CartProductList';
import './Cart.css'
import { useShopContext } from '../../contexts/shop';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import BasicButton from '../../components/BasicButton/BasicButton';
import { useAuthContext } from '../../contexts/auth';
import { useHistory } from 'react-router';

export default function Cart() {

    const { isAuthenticated } = useAuthContext();
    const history = useHistory();

    if(!isAuthenticated) history.replace('/login');

    const { userCart } = useShopContext();

    const totalItems = userCart.reduce((acc, cur) => {
        return (acc + cur.amount)
    }, 0)

    function shop() {

    }

    const renderCartDetails = (
        <div className="Cart_orderColumn">
        <div className="Cart_orderColumnContent">
            <OrderDetails
                order={userCart}
            />

            <BasicButton
            color = "#FFF"
            bgColor = "#0A75BC"
            onClick = {() => {shop()}}
            >
                Finalizar compra
            </BasicButton>
        </div>
    </div>
    )

    return (
        <div className="Cart_container">
            <div className="Cart_title">Carrinho</div>
            <p className="Cart_amountLabel">{totalItems} {totalItems === 1 ? 'item' : 'itens'} </p>

            <div className="Cart_row">
                <CartProductList />
                {totalItems > 0 ? renderCartDetails : <></>}
            </div>            
        </div>
    )
}