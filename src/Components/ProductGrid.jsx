import React from "react";
import products from "./Constant.js";
import Product from "./Product.jsx";

class ProductGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: products
    };
  }
  render() {
    return (
      <>
        <h2> Products list</h2>
        {this.state.productList.map((product) => {
          return <Product prod={product} />;
        })}
        ;
      </>
    );
  }
}

export default ProductGrid;
