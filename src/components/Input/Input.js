import './Input.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import React, { useState } from 'react';

const Input = ({ shouldHide }) => {
    const [passwordVisible, setPasswordVisible] = useState(!shouldHide);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <label>
            <input
                className='login-input'
                type={passwordVisible ? 'text' : 'password'}
                placeholder={shouldHide ? 'Password' : 'User Name'}
            />
            {shouldHide ? (
                passwordVisible ? (
                    <AiFillEyeInvisible className='eye' onClick={togglePasswordVisibility} />
                ) : (
                    <AiFillEye className='eye' onClick={togglePasswordVisibility} />
                )
            ) : null}
        </label>
    );
}

export default Input;
