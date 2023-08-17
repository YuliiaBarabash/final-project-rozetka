import "./Input.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";

const Input = ({ isError, label, handleChange, value, shouldHide }) => {
  const [passwordVisible, setPasswordVisible] = useState(!shouldHide);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <label className="input-wrap">
      {shouldHide ? (
        passwordVisible ? (
          <AiFillEyeInvisible
            className="eye"
            onClick={togglePasswordVisibility}
          />
        ) : (
          <AiFillEye className="eye" onClick={togglePasswordVisibility} />
        )
      ) : null}
      <input
        value={value}
        onChange={handleChange}
        className="login-input"
        name={label}
        type={shouldHide ? (passwordVisible ? "text" : "password") : "text"}
        placeholder={shouldHide ? "Password" : "User Name"}
      />
    </label>
  );
};

export default Input;
