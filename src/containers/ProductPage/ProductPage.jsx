import { useParams } from "react-router-dom";


const ProductPage = () => {

  let { productID } = useParams();

  return (
    <div>
      <h2>Chosen product is: {productID} </h2>
    </div>
  );
};

export default ProductPage;
