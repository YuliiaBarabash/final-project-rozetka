import "./ProdButton.css";
import userIcon from "../../assets/user-icon.svg";
import plusIcon from "../../assets/plus.svg";
import { Link } from "react-router-dom";

const ProdButton = () => {
  return (
    <div className="btn-container">
      <Link className="products-btn" type="button" to="/product-preview">
        <img src={userIcon} className="btn-icon" alt="person" />
        Preview
      </Link>
      <button className="products-btn" type="button">
        <img src={plusIcon} className="btn-icon" alt="plus" />
        Add product
      </button>
    </div>
  );
};

export default ProdButton;
