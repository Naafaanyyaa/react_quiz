import React, {useState} from "react";
import './InputDataStyle.css';
import {queries} from "@testing-library/react";

const InputData = (props) => {
    const [input, setInput] = useState('');
    const [inputDirty, setInputDirty] = useState(false);
    const [inputError, setInputError] = useState('');
    const [inputHasValue, setInputHasValue] = useState(false);
    const [eyeActive, setEyeActive] = useState(false);

    const validatorHandler = (e) => {
        setInput(e.target.value);
        if(e.target.name === "email"){
            const regularEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if(e.target.value === ''){
                setInputError('Enter email');
            }
            else if(!regularEmail.test(String(e.target.value).toLowerCase())) {
                setInputError('Incorrect email');
            }
            else{
                setInputError('');
            }
        }
        else if(e.target.name === "login"){
            if(e.target.value === ''){
                setInputError('Enter login');
            }
            else{
                setInputError('');
            }
        }
        else if(e.target.name === "password"){
            const regularPassword = /[a-zA-z0-9]/;
            if(e.target.value === ''){
                setInputError('Enter password');
            }
            else if(e.target.value.length < 8){
                setInputError('Password is too short');
            }
            else if(!regularPassword.test(String(e.target.value).toLowerCase())) {
                setInputError('Password cannot contain special symbols');
            }
            else{
                setInputError('');
            }
        }
        else if(e.target.name === "repeatPassword"){
            if(e.target.value === ''){
                setInputError('Enter password');
            }
            else if(e.target.value.length < 8){
                setInputError('Password is too short');
            }
            else{
                setInputError('');
            }
        }
    }

    const blurHandler = (e) => {
        const timeOut = setTimeout(() => setInputDirty(true), 2000);
        return() => clearTimeout(timeOut);
    }

    const clickHandler = (e) => {
        setInputDirty(false);
    }

    const hasValueHandler = (e) => {
        if (e.target.value.trim() !== ''){
            setInputHasValue(true);
        }
        else {
            setInputHasValue(false);
        }
    }

    const clickEyeHandler = (e) => {
        if (!eyeActive){
            setEyeActive(true);
        }
        else{
            setEyeActive(false);
        }
    }

    const buttonIcon = (iconClass) => {
        if (iconClass != null){
            return <span onClick={e => clickEyeHandler(e)} className="btn-show-pass"> <i className={eyeActive ? iconClass + " text-color-red" : iconClass + " text-color-grey"}></i></span>;
        }
        return null;
    }

    return (
        <div onChange={e => {blurHandler(e);validatorHandler(e)}} onBlur={e => {hasValueHandler(e)}} onClick={e => {clickHandler(e)}} className={(inputDirty && inputError) ? "wrap-input100 validate-input alert-validate" : "wrap-input100 validate-input"} data-validate={(inputDirty && inputError) ? inputError : ''}>
                {buttonIcon(props.iconClass)}
            <input  className={inputHasValue ? "input100 has-val" : "input100"} type={eyeActive ? "text" : props.type} name={props.name}  maxLength="25"/>
            <span className="focus-input100" data-placeholder={props.dataPlaceholder}></span>
        </div>
    )
}

export default InputData;