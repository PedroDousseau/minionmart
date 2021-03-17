import React, {useState} from "react";
import './Login.css'
import BasicButton from '../../components/BasicButton/BasicButton'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/loginImage.png'
import { Auth } from 'aws-amplify'
import { useAuthContext } from '../../contexts/auth';
import { useHistory } from "react-router-dom";
import ConfirmationForm from "../../components/ConfirmationForm/ConfirmationForm";

export default function Login() {

  const { setIsAuthenticated } = useAuthContext();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [needConfirmation, setNeedConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    if(!validateLoginForm()) return false;

    setIsLoading(true);
    setError("");

    try {
        await Auth.signIn(email, password);

        setIsAuthenticated(true);
        history.push('/');
    } catch (err) {
        switch (err.code) {
          case 'NotAuthorizedException':
          setError("Usuário ou senha inválidos.");
          break;

          case 'UserNotConfirmedException':
          setError("");
          setNeedConfirmation(true);
          break;

          default:
          setError("Algo deu errado, tente novamente.");
          break;
        }

        setIsLoading(false);
    }
  }

  function validateLoginForm() {
    if(email.length === 0) {
      setError("Preencha o campo de email.");
      return false;
    }
    if(password.length === 0) {
      setError("Preencha o campo de senha.");
      return false;
    }
    
    return true;
  }

  const loginForm = (
        <>
        <h3 className="Login_title">Login</h3>

        <div className="Login_form">
            <input 
            placeholder="Email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input 
            placeholder="Senha"
            type="password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>

            <BasicButton
            color="#231F20"
            bgColor="#FCE029"
            fullWidth
            isLoading = {isLoading}
            onClick = {() => {handleLogin()}}
            >
            Entrar
            </BasicButton>  

            {error ? <p className="Login_error">{error}</p> : <></>}

            <Link className="Login_signupLabel" to="signup">Crie uma conta!</Link>          
        </div>

    </>
  )

  return (
    <div className="Login_container">
      {needConfirmation ? <ConfirmationForm email={email} password={password} /> : loginForm}
      <img src={loginImage} alt=""/>
    </div>
  );
} 