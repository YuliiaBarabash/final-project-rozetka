import ProductImage from "../../assets/laptop.png";
import cart from "../../assets/cart.svg";
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className="productCard">
      <img src={ProductImage} className="productImage" alt="product" />
      <h3 className="productName">Ноутбук Lenovo Y50-70 Aluminum Black</h3>
      <div className="card-span-wrap">
          <span className="price">25 000 ₴</span>
          <span className="quantity">Кількість: 5</span>
      </div>
      <div className="cartWrap">
        <img src={cart} className="cartIcon" alt="cart" />
        <p className="cartDescription">Готовий до відправки</p>
      </div>
    </div>
  );
}

export default ProductCard;
