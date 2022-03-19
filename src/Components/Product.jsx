import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>{this.props.prod.title}</h3>
        <img src={this.props.prod.thumbnailUrl} />
      </div>
    );
  }
}
export default Product;
