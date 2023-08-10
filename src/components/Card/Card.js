import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Card.css";

const Card = () => {
  return (
    <div className="login-card">
      <img src={logo} className="login-logo" alt="main logo" />
      <form className="input-container">
          <Input shouldHide={false} />
          <Input shouldHide={true} />
          <Button />
      </form>
    </div>
  );
};

export default Card;
