import "./ProductPreview.css";
import productsLogo from "../../assets/logo-white.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductImage from "../../assets/laptop.png";

const products = [
  {
    id: 0,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: "../../assets/laptop.png",
  },
  {
    id: 1,
    name: "Ноутбук Lenovo Y50-70 Aluminum Black 1",
    price: "25 000 ₴",
    image: "../../assets/laptop.png",
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </div>
  );
};

export default ProductPreview;
