import "./ProdButton.css";
import userIcon from "../../assets/user-icon.svg";
import plusIcon from "../../assets/plus.svg";

const ProdButton = () => {
  return (
    <div className="btn-container">
      <button className="products-btn" type="button">
        <img src={userIcon} className="btn-icon" alt="person" />
        Preview
      </button>
      <button className="products-btn" type="button">
        <img src={plusIcon} className="btn-icon" alt="plus" />
        Add product
      </button>
    </div>
  );
};

export default ProdButton;
