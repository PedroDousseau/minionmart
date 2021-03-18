import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { AddToCart } from '../../api/cartService';
import BasicButton from '../../components/BasicButton/BasicButton';
import { useShopContext } from '../../contexts/shop';
import { useAuthContext } from '../../contexts/auth';
import './Products.css';

export default function Product() {

    const { userCart, setUserCart } = useShopContext();
    const { isAuthenticated } = useAuthContext();

    const history = useHistory();

    const location = useLocation();
    const product = location.state.product;

    const isOnCart = userCart.find((el) => el.product.productId === product.productId)

    const renderAddToCartButton = (
        <BasicButton
        color="#FFF"
        bgColor="#0A75BC"
        onClick = {() => {
            if(!isAuthenticated) history.push('/login');

            else AddToCart(userCart, setUserCart, product)
        }}
        >
            Adicionar ao carrinho
        </BasicButton>
    )

    const renderAlreadyInCartButton = (
        <BasicButton
        color="#FFF"
        bgColor="#0A75BC"
        disabled
        >
            Já adicionado
        </BasicButton>
    )

    return (
        <div className="Product_container">

        <div className="Product_row">
            <div className="Product_imgContainer">
                <img src={product.img} alt="" />
            </div>

            <div className="Product_info">
                <h3 className="Product_title">{product.name}</h3>

                
                <h2 className="Product_description" dangerouslySetInnerHTML={{ __html: product.description }}></h2>

                <p className="Product_detailsTitle">Detalhes técnicos:</p>
                <p className="Product_details" dangerouslySetInnerHTML={{ __html:product.details}}></p>

                {(isOnCart) ? renderAlreadyInCartButton : renderAddToCartButton}
            </div>
        </div>  
        </div>
    );
}