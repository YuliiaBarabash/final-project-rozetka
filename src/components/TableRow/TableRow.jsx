import React from "react";
import './TableRow.css';
import pencil from "../../assets/pencil.svg";
import bucket from "../../assets/bucket.svg";

const TableRow = ({ product, index }) => {

    const isEven = index % 2 === 0;

  return (
    <tr className={`row ${isEven ? "even" : "odd"}`}>
      <th className={`item ${isEven ? "white-text" : "purple-text"}`}>
        {product.id}
      </th>
      <th className={`item ${isEven ? "white-text" : "purple-text"}`}>
        {product.category}
      </th>
      <th className={`item ${isEven ? "white-text" : "purple-text"}`}>
        {product.name}
      </th>
      <th className={`item ${isEven ? "white-text" : "purple-text"}`}>
        {product.quantity}
      </th>
      <th className={`item ${isEven ? "white-text" : "purple-text"}`}>
        {product.price}
      </th>
      <th className="icons">
        <img src={pencil} className="pencil-icon" alt="pencil" />
        <img src={bucket} className="bucket-icon" alt="bucket" />
      </th>
    </tr>
  );
};

export default TableRow;



