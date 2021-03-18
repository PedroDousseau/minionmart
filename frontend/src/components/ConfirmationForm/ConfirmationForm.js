import React, {useState} from "react";
import './ConfirmationForm.css';
import { Auth } from 'aws-amplify';
import { useAuthContext } from '../../contexts/auth';
import { useHistory } from "react-router-dom";
import BasicButton from "../BasicButton/BasicButton";

export default function ConfirmationForm({email, password}) {

    const { setIsAuthenticated } = useAuthContext();
    const history = useHistory();

    const [confirmationCode, setConfirmationCode] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleConfirmation () {
        if(!validateConfirmationForm()) return false;
        setIsLoading(true);
        setError("");

        try {
            await Auth.confirmSignUp(email, confirmationCode);
            await Auth.signIn(email, password);

            setIsAuthenticated(true);
            history.push("/");
        } catch (err) {
            switch (err.code) {
                case 'CodeMismatchException':
                setError("Código inválido.");
                break;

                case 'ExpiredCodeException':
                setError("Código expirado, solicite um novo logo abaixo.");
                break;

                default:
                setError("Algo deu errado, tente novamente.");
                break;
              }

            setIsLoading(false);
        }
    }

    function validateConfirmationForm() {
        if(confirmationCode.length === 0) {
          setError("Preencha o campo de código.");
          return false;
        }
        return true;
    }

    async function handleReSendCode() {
        setIsLoading(true);
        setError("");

        try {
            await Auth.resendSignUp(email);
            setIsLoading(false);
        } catch (err) {
            switch (err.code) {
                default:
                setError("Algo deu errado, tente novamente.");
                break;
              }

            setIsLoading(false);
        }
    }

    return (
    <div className="ConfirmationForm_container">
        <h3 className="ConfirmationForm_title">Confirmar conta</h3>
        <h4 className="ConfirmationForm_subtitle">Um email com o código de confirmação foi enviado para seu endereço de email.</h4>

        <div className="ConfirmationForm_form">
            <input 
            placeholder="Código de confirmação"
            value = {confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            ></input>

            <BasicButton
            color="#FFF"
            bgColor="#0A75BC"
            fullWidth
            isLoading = {isLoading}
            onClick = {() => {handleConfirmation()}}
            >
            Verificar
            </BasicButton>

            {error ? <p className="ConfirmationForm_error">{error}</p> : <></>}

            <p className="ConfirmationForm_resendCode" onClick = {() => {if(!isLoading) handleReSendCode();}}>Reenviar código</p>        
        </div>
    </div>
    );
} 