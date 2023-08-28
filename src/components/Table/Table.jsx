import React from "react";
import "./Table.css";
import TableRow from "../TableRow/TableRow";
import arrows from "../../assets/arrows.svg";


const Table = ({ products }) => {
  return (
    <div className="table-container">
      <h1 className="products-heading">Products</h1>
      <table className="product-table" cellSpacing="0" cellPadding="0">
      <tr className="headers">
              <th className="table-header">
                ID <img src={arrows} className="arrows-icon" alt="arrows" />
              </th>
              <th className="table-header">
                Category{" "}
                <img src={arrows} className="arrows-icon" alt="arrows" />
              </th>
              <th className="table-header">
                Name <img src={arrows} className="arrows-icon" alt="arrows" />
              </th>
              <th className="table-header">
                Quantity{" "}
                <img src={arrows} className="arrows-icon" alt="arrows" />
              </th>
              <th className="table-header">
                Price <code>(</code>₴<code>)</code>
                <img src={arrows} className="arrows-icon" alt="arrows" />
              </th>
              <th className="table-header"></th>
            </tr>
            {products.map((product, index) => (
            <TableRow key={product.id} product={product} index={index}/>
          ))}
      </table>
    </div>
  );
};

export default Table;
