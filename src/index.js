import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './containers/Login/Login';
import Products from './containers/Products/Products';
import ProductPreview from './containers/ProductPreview/ProductPreview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Login /> */}
   <Products />
   {/* <ProductPreview/> */}
  </React.StrictMode>
);

