import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import Input from "../Input/Input";
import "./Card.css";

const Card = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginEmpty, setIsLoginEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);

  const token = "testToken";

  const handleChange = (e) => {
    if (e.target.name === "Login") {
      setLogin(e.target.value);
      setIsLoginEmpty(false);
    }

    if (e.target.name === "Password") {
      setPassword(e.target.value);
      setIsPasswordEmpty(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!login) {
      setIsLoginEmpty(true);
    }

    if (!password) {
      setIsPasswordEmpty(true);
    }

    if (login === "username" && password === "password") {
      localStorage.setItem('authToken', token);
      console.log('Success');
    } else if (login !== "username" && login !== "") {
      setIsLoginValid(true);
      setIsLoginEmpty(false);
      setIsPasswordEmpty(false);
    } else if (password !== "password" && password !== "") {
      setIsLoginValid(true);
      setIsLoginEmpty(false);
      setIsPasswordEmpty(false);
    }
  };

  return (
    <div className="login-card">
      <img src={logo} className="login-logo" alt="main logo" />
      <form onSubmit={handleSubmit} className="input-container">
        <div className="gap">
          {isLoginEmpty && (
            <span className="error-message">Поле не має бути порожнім!</span>
          )}
          {isLoginValid && (
            <span className="error-message">Логін або пароль невірні!</span>
          )}
        </div>
        <Input
          label="Login"
          handleChange={handleChange}
          value={login}
          isError={isLoginEmpty}
        />
        <div className="gap">
          {isPasswordEmpty && (
            <span className="error-message">Поле не має бути порожнім!</span>
          )}
        </div>
        <Input
          label="Password"
          handleChange={handleChange}
          value={password}
          shouldHide
          isError={isPasswordEmpty}
        />

        <input
          className="login-btn"
          type="submit"
          name="button"
          value="Login"
        ></input>
      </form>
    </div>
  );
};

export default Card;
