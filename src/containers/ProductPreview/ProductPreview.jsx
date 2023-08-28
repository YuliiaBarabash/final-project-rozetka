import "./ProductPreview.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants/Constance";
import productsLogo from "../../assets/logo-white.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductImage from "../../assets/laptop.png";
import { Link } from "react-router-dom";


const ProductPreview = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/preview`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="productPreview-page">
        <img src={productsLogo} className="products-logo" alt="main logo" />
        <div className="products-preview">
          {products.map((product) => (
            <Link className="text" to={`/products-preview/${product.id}`}>
              <ProductCard key={product.id} product={product}/>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default ProductPreview;
