import React, {useState} from 'react';
import './Signup.css';
import BasicButton from '../../components/BasicButton/BasicButton';
import happyMinions from '../../assets/happy-minions.png';
import { Auth } from 'aws-amplify';
import ConfirmationForm from '../../components/ConfirmationForm/ConfirmationForm';

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(null);

    const [isLoading, setIsLoading] = useState("");
    const [error, setError] = useState("");

    async function handleSignup() {
        if(!validateSignupForm()) return false;

        setIsLoading(true);
        setError("");

        try {
            const newUser = await Auth.signUp({
                username: email,
                password: password,
            });

            setNewUser(newUser);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            if(err.code === 'UsernameExistsException') { setError("Uma conta com este email já existe."); }
            else { setError("Algo deu errado, tente novamente."); }

            setIsLoading(false);
        }
    }

    function validateSignupForm() {
        setError("");

        // Empty email
        if(email.length === 0) {
          setError("Preencha o campo de email.");
          return false;
        }

        // Invalid email
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!emailRegex.test(email)) {
            setError("Endereço de email inválido.");
            return false;            
        }

        // Password does not contain at least 8 chars
        if(password.length < 8) {
          setError("Sua senha deve conter no mínimo 8 caracteres.");
          return false;
        }

        // Password does not contain a lowercase letter
        let lowerCaseRegex = /[a-z]/;
        if(!lowerCaseRegex.test(password)) {
            setError("Sua senha deve conter caracteres minúsculos.");
            return false;
        }

        // Password does not contain a uppercase letter
        let upperCaseRegex = /[A-Z]/;
        if(!upperCaseRegex.test(password)) {
            setError("Sua senha deve conter caracteres maiúsculos.");
            return false;
        } 

        // Password does not contain a number
        let numberRegex = /\d/;
        if(!numberRegex.test(password)) {
            setError("Sua senha deve conter números.");
            return false;
        }                 
        
        return true;
      }

    const signupForm = (
        <>
        <h3 className="Signup_title">Criar conta</h3>

        <div className="Signup_form">
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
        onClick = {() => {handleSignup()}}
        >
        Enviar
        </BasicButton>  

        {error ? <p className="Signup_error">{error}</p> : <></>}
   
        </div>
        </>
    )

    return (
        <div className="Signup_container">
            {newUser ? <ConfirmationForm email={email} password={password} /> : signupForm}
            <img src={happyMinions} alt="" />
        </div>
    )
}