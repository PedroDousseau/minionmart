import React from 'react';
import CartProductList from '../../components/CartProductList/CartProductList';
import './Cart.css'

import bob from "../../assets/products/bob.png";
import dave from "../../assets/products/dave.png";
import phil from "../../assets/products/phil.png";
import jerry from "../../assets/products/jerry.png";
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import BasicButton from '../../components/BasicButton/BasicButton';

export default function Cart() {

    const DEFAULT_ORDER = [
        {
            product: {
                title: "Bob",
                id: '3',
                img: bob,
                description: 'Bob é o Minion mais infantil de todos. Bob possui heterocromia ocular, por isso um olho verde e outro castanho. Pelas suas atitudes nos trailer podemos perceber que ele é muito divertido e até histórias de terror não lhe assustam.<br/><br/> Olhos: Dois olhos, um olho verde e outro castanho<br/> Cabelo: Não possui cabelo<br/> Corpo: Gordinho<br/> Tamanho: Baixo (menor minion)<br/> Destaque: Possui um bichinho de pelúcia',
                details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
            },
            amount: 2
        },
        {
            product: {
                title: "Dave",
                id: '4',
                img: dave,
                description: 'É o irmão de dois olhos do Stuart.<br/><br/>Olhos: Dois olhos<br/> Cabelo: Liso, repartido ao meio<br/> Corpo: Magro<br/> Tamanho: Médio<br/> Destaque: Ama foguetes e mísseis',
                details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
            },
            amount: 5
        },
        {
            product: {
                title: "Phil",
                id: '5',
                img: phil,
                description: 'É o personagem mais responsável de todos, ele vai liderar a busca por um vilão.<br/><br/>Olhos: Possui um olho<br/> Cabelo: Uma pequena moita de cabelo<br/> Corpo: Normal<br/> Tamanho: Médio<br/> Destaque: É o mais engraçado, ri de qualquer coisa',
                details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
            },
            amount: 6
        },
        {
            product: {
                title: "Jerry",
                id: '6',
                img: jerry,
                description: 'Jerry gosta de gritar… “O QUEEEEEEEEEEE?”<br/><br/>Olhos: Possui dois olhos<br/> Cabelo: Cabelos espetados<br/> Corpo: Normal<br/> Tamanho: Médio<br/> Destaque: Melhor amigo do Stuart',
                details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
            },
            amount: 1
        }
    ]

    return (
        <div className="Cart_container">
            <div className="Cart_title">Carrinho</div>
            <p className="Cart_amountLabel">2 itens</p>

            <div className="Cart_row">
                <CartProductList
                    order = {DEFAULT_ORDER}
                />

                <div className="Cart_orderColumn">
                    <div className="Cart_orderColumnContent">
                        <OrderDetails
                            order={DEFAULT_ORDER}
                        />

                        <BasicButton
                        color = "#FFF"
                        bgColor = "#0A75BC"
                        
                        >
                            Finalizar compra
                        </BasicButton>
                    </div>
                </div>
            </div>            
        </div>
    )
}