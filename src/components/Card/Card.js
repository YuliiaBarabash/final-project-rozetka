import React, { useState } from 'react';
import logo from "../../assets/logo.svg";
import Input from "../Input/Input";
import "./Card.css";

const Card = ({}) => {
  const renderButton = (onClickCallback) => (
    <button onClick={onClickCallback}>Send Request</button>
  );
  return (
    <div className="login-card">
      <img src={logo} className="login-logo" alt="main logo" />
      <form className="input-container">
          <Input shouldHide={false} />
          <Input shouldHide={true} />
          <input className='login-btn' type='submit' name='login' value='Login'></input>
      </form>
    </div>
  );
};

export default Card;
