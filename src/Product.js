import React from "react";
import { Link, Route } from "react-router-dom";

const Product = ({ match, data }) => {
  var product = data.find(p => p.id == match.params.productId);
  var productData;

  if (product)
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  else productData = <h2>Sorry. Product does not not exists</h2>;

  return (
    <div>
      <div>{productData}</div>
    </div>
  );
};

export default Product;
