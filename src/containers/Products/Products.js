import React, { useState, useEffect } from "react";
import "./Products.css";
import productsLogo from "../../assets/logo-white.svg";
import ProdButton from "../../components/ProdButton/ProdButton";
import Table from "../../components/Table/Table";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect((id) => {
    fetch(`https://64df853771c3335b2582c0c6.mockapi.io/api/products`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((response) =>
      {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const productsFormatted = data.map((product) => ({
          id: product.id,
          type: product.type,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
        }));
        setProducts(productsFormatted);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product">
      <header className="product-header">
        <img src={productsLogo} className="products-logo" alt="main logo" />
        <ProdButton products={products} />
        <Table products={products} />
      </header>
    </div>
  );
};

export default Products;
