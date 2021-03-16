import React from 'react';
import './Signup.css';
import BasicButton from '../../components/BasicButton/BasicButton';
import happyMinions from '../../assets/happy-minions.png';

export default function Signup() {

    return (
        <div className="Signup_container">
            <h3 className="Signup_title">Criar conta</h3>

            <div className="Signup_form">
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>

            <BasicButton
            color="#231F20"
            bgColor="#FCE029"
            fullWidth
            >
            Enviar
            </BasicButton>  
       
            </div>

            <img src={happyMinions} alt="" />
        </div>
    )
}