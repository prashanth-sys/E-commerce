import React, { Component } from "react";
import Header from "../Header";

import "./index.css";

class ProductCard extends Component {
  state = { productDetails: {} };

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (response.ok) {
      const fetchedData = await response.json();
      this.setState({ productDetails: fetchedData });
    } else {
      console.error("Failed to fetch product details");
    }
  };

  render() {
    const { productDetails } = this.state;

    return (
      <>
        <Header />
        <div className="product-details-container">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="item"
          />

          <div className="details-container">
            <h1 className="name">{productDetails.title}</h1>
            <p className="details">{productDetails.description}</p>
            <div className="price-rating">
              <p>Rs:{productDetails.price} Only/-</p>
              <button type="button" className="add-button">
                Add to Cart
              </button>
            </div>
            <button className="buy-button" type="button">
              Buy Now
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCard;
