import ProductImage from "../../assets/laptop.png";
import cart from "../../assets/cart.svg";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={ProductImage} className="productImage" alt="product" />
      <h3 className="productName">{product.name}</h3>
      <div className="card-span-wrap">
          <span className="price">{product.price}</span>
          <span className="quantity">Кількість: {product.quantity}</span>
      </div>
      <div className="cartWrap">
        <img src={cart} className="cartIcon" alt="cart" />
        <p className="cartDescription">Готовий до відправки</p>
      </div>
    </div>
  );
}

export default ProductCard;
