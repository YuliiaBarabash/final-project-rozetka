import cart from "../../assets/cart.svg";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={product.image} className="productImage" alt="product" />
      <h3 className="productName">Ноутбук {product.name}</h3>
      <div className="card-span-wrap">
          <span className="price">{product.price} ₴</span>
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
