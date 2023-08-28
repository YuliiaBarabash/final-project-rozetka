import "./ProductPreview.css";
import productsLogo from "../../assets/logo-white.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductImage from "../../assets/laptop.png";
import { Link } from "react-router-dom";

const products = [
  {
    id: 0,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: ProductImage,
  },
  {
    id: 1,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: ProductImage,
  },
  {
    id: 2,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: "../../assets/laptop.png",
  },
  {
    id: 3,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: "../../assets/laptop.png",
  },
  {
    id: 4,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: "../../assets/laptop.png",
  },
  {
    id: 5,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: "../../assets/laptop.png",
  },
];

const ProductPreview = () => {
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
