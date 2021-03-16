import React from 'react';
import './Signup.css';
import BasicButton from '../../components/BasicButton/BasicButton';

export default function Signup() {

    return (
        <div className="Signup_container">
            <h3 className="Signup_title">Criar conta</h3>

            <div class="Signup_form">
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
        </div>
    )
}