import React, { useState, useEffect } from "react";
import "./Products.css";
import productsLogo from "../../assets/logo-white.svg";
import ProdButton from "../../components/ProdButton/ProdButton";
import Table from "../../components/Table/Table";

const Products = () => {
  const [products, setProducts] = useState([]);

  const API_URL = "https://64df853771c3335b2582c0c6.mockapi.io/api/products";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL, {
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
    <div className="product">
      <header className="product-header">
        <img src={productsLogo} className="products-logo" alt="main logo" />
        <ProdButton />
        <Table products={products} />
      </header>
    </div>
  );
};

export default Products;
