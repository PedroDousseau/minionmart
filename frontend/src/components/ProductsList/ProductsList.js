import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsList.css'

import stuart from "../../assets/products/stuart.png";
import kevin from "../../assets/products/kevin.png";
import bob from "../../assets/products/bob.png";
import dave from "../../assets/products/dave.png";
import phil from "../../assets/products/phil.png";
import jerry from "../../assets/products/jerry.png";


export default function ProductsList() {
    const DEFAULT_DATA = [
        {
            title: "Stuart",
            id: '1',
            img: stuart,
            description: 'Stuart é o mais sincero e inocente de todos.<br/> Durante os trailers divulgados, temos diversas cenas engraçadas com Stuart, ele confundindo os amigos com banana e hidrantes com garotas.<br/><br/>Olhos: Possui apenas um olho</br>Cabelo: Liso, repartido ao meio<br/>Corpo: Magro<br/>Tamanho: Médio<br/>Destaque: É o mais faminto',
            details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
        },
        {
            title: "Kevin",
            id: '2',
            img: kevin,
            description: 'É o personagem mais responsável de todos, ele vai liderar a busca por um vilão. Provavelmente Kevin seja um parente do passado de Tim (um dos Minions principais de Meu Malvado Favorito), ambos são iguais em tudo. É o único minion com temperamento e personalidade.<br/><br/>Olhos: Possui dois olhos<br/> Cabelo: Uma pequena moita de cabelo<br/> Corpo: Magro<br/> Tamanho: Alto<br/> Destaque: É um lider',
            details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
        },
        {
            title: "Bob",
            id: '3',
            img: bob,
            description: 'Bob é o Minion mais infantil de todos. Bob possui heterocromia ocular, por isso um olho verde e outro castanho. Pelas suas atitudes nos trailer podemos perceber que ele é muito divertido e até histórias de terror não lhe assustam.<br/><br/> Olhos: Dois olhos, um olho verde e outro castanho<br/> Cabelo: Não possui cabelo<br/> Corpo: Gordinho<br/> Tamanho: Baixo (menor minion)<br/> Destaque: Possui um bichinho de pelúcia',
            details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
        },
        {
            title: "Dave",
            id: '4',
            img: dave,
            description: 'É o irmão de dois olhos do Stuart.<br/><br/>Olhos: Dois olhos<br/> Cabelo: Liso, repartido ao meio<br/> Corpo: Magro<br/> Tamanho: Médio<br/> Destaque: Ama foguetes e mísseis',
            details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
        },
        {
            title: "Phil",
            id: '5',
            img: phil,
            description: 'É o personagem mais responsável de todos, ele vai liderar a busca por um vilão.<br/><br/>Olhos: Possui um olho<br/> Cabelo: Uma pequena moita de cabelo<br/> Corpo: Normal<br/> Tamanho: Médio<br/> Destaque: É o mais engraçado, ri de qualquer coisa',
            details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
        },
        {
            title: "Jerry",
            id: '6',
            img: jerry,
            description: 'Jerry gosta de gritar… “O QUEEEEEEEEEEE?”<br/><br/>Olhos: Possui dois olhos<br/> Cabelo: Cabelos espetados<br/> Corpo: Normal<br/> Tamanho: Médio<br/> Destaque: Melhor amigo do Stuart',
            details: 'Boneco de Plástico<br/>Dimensões: 30x11x5 cm<br/>Peso: 211g<br/>Fabricante: Mattel'
        }
    ]

    const products = DEFAULT_DATA.map((product) => {
        return (
            <ProductCard
            shopButton
            key = {product.id}
            product = {product}
            />
        )
    })

    return (
        <div className="ProductsList_container">
            {products}
        </div>
    );
} 