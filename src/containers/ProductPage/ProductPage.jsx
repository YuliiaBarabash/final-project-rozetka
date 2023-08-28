import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsArrowLeft, BsCheckCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/Constance";
import productsLogo from "../../assets/logo-white.svg";
import "./ProductPage.css";

const ProductPage = ({ preview }) => {
  const navigate = useNavigate();
  const { productID } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/preview/${productID}`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [productID]);

  return (
    <div>
      <div className="header">
        <img src={productsLogo} className="products-logo" alt="main logo" />
      </div>
      <div className="product-description-wrap">
          <div className="product-info-wrap">
            <div className="title-wrap">
              <BsArrowLeft className="arrow-icon" onClick={() => navigate(-1)} />
              <span className="product-name">{product.name}</span>
            </div>
            <div className="product-card">
              <img src={product.image} className="product-image" alt="product" />
              <div className="product-info">
                <div className="check-wrap">
                  <BsCheckCircle className="check-icon isAvailable-text" />
                  <span className="isAvailable-text">Є в наявності</span>
                </div>
                <span className="product-price">{product.price} ₴</span>
                <span className="product-quantity">Кількість: {product.quantity}</span>
              </div>
            </div>
          </div>
          <div className="product-description">
            <p className="description-name">
              Опис<span className="description-title"> {product.name}</span>
            </p>
            <div className="description-text-wrap">
                <p className="description-point">15.6-дюймовий дисплей стандарту Full HD</p>
                <p className="description">Фільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 x 1080).</p>
                <p className="description-point">Динаміки преміум-класу</p>
                <p className="description">Стереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.</p>
                <p className="description-point">Dolby Advanced Audio</p>
                <p className="description">Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кришталево чіткий просторовий звук за допомогою вбудованих динаміків.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductPage;
