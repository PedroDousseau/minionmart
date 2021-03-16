import React from "react";
import './Login.css'
import BasicButton from '../../components/BasicButton/BasicButton'
import {Link} from 'react-router-dom'
import loginImage from '../../assets/loginImage.png'

export default function Login() {
  return (
    <div className="Login_container">

        <h3 className="Login_title">Login</h3>

        <div class="Login_form">
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>

            <BasicButton
            color="#231F20"
            bgColor="#FCE029"
            fullWidth
            >
            Entrar
            </BasicButton>  

            <Link className="Login_signupLabel" to="signup">Crie uma conta!</Link>          
        </div>

        <img src={loginImage} />

    </div>
  );
} 