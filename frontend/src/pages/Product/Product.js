import React from 'react';
import { useLocation, Redirect } from 'react-router';
import BasicButton from '../../components/BasicButton/BasicButton';
import './Products.css';

export default function Product(props) {

    const location = useLocation();

    if (!location.state || !location.state.product) {
        return <Redirect to='/notFound'/>;
    }

    const product = location.state.product;

    return (
        <div className="Product_container">

        <div className="Product_row">
            <div className="Product_imgContainer">
                <img src={product.img} alt="" />
            </div>

            <div className="Product_info">
                <h3 className="Product_title">{product.title}</h3>

                
                <h2 className="Product_description" dangerouslySetInnerHTML={{ __html: product.description }}></h2>

                <p className="Product_detailsTitle">Detalhes técnicos:</p>
                <p className="Product_details" dangerouslySetInnerHTML={{ __html:product.details}}></p>

                <BasicButton
                color="#FFF"
                bgColor="#0A75BC"
                >
                    Adicionar ao carrinho
                </BasicButton>
            </div>
        </div>  
        </div>
    );
}