import "./Products.css";
import productsLogo from "../../assets/logo-white.svg";
import ProdButton from "../../components/ProdButton/ProdButton";
import Table from "../../components/Table/Table";

const Products = () => {
  return (
    <div className="product">
      <header className="product-header">
        <img src={productsLogo} className="products-logo" alt="main logo" />
        <ProdButton />
        <Table />
      </header>
      
    </div>
  );
};

export default Products;
