import './Input.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import React, { getItem, useState } from 'react';

const Input = ({shouldHide}) => {

    const [passwordVisible, setPasswordVisible] = useState(!shouldHide);
    const [loginValue, setLoginValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginChange = (e) => {
        setLoginValue(e.target.value);

        if (e.target.value === '') {
            setErrorMessage('Логін або пароль невірні.');
        } else {
            setErrorMessage('');
        }
        
        // else {
        //     getItem(() => {
        //         localStorage.setItem('username', JSON.stringify(loginValue));
        //     } )
        // }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


  

    return (
        <label className='input-wrap'>
            {shouldHide ? (
                passwordVisible ? (
                    <AiFillEyeInvisible className='eye' onClick={togglePasswordVisibility} />
                ) : (
                    <AiFillEye className='eye' onClick={togglePasswordVisibility} />
                )
            ) : null}
            <input
            value={loginValue}
            onChange={handleLoginChange}
                className='login-input'
                name='field'
                type={shouldHide ? (passwordVisible ? 'text' : 'password') : 'text'}
                placeholder={shouldHide ? 'Password' : 'User Name'}
            />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </label>
    );
}

export default Input;
