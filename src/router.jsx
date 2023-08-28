import Login from "./containers/Login/Login";
import Products from "./containers/Products/Products";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import ProductPage from "./containers/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>} />

      <Route element={<PrivateRoute />}>
        <Route path="/products" element={<Products />} />
        <Route path="/product-preview" element={<ProductPreview />} />
        <Route path="/products-preview/:productID" element={<ProductPage />}/>
      </Route>
      <Route path="*" element={<div>404 | Page not found!</div>} />
    </Routes>
  </BrowserRouter>
  )
};

export default AppRouter;