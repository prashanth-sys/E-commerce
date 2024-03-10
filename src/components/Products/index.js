import { Component } from "react";
import Header from "../Header";
import ProductDetails from "../ProductDetails"; // Importing ProductDetails component

import "./index.css";

class Products extends Component {
  state = { productsList: [] };

  componentDidMount() {
    this.getProducts(); // Fetch products data when component mounts
  }

  // Function to fetch products data from the API
  getProducts = async () => {
    const apiUrl = "https://fakestoreapi.com/products";
    const option = {
      method: "GET",
    };
    const response = await fetch(apiUrl, option);
    if (response.ok === true) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      // Mapping fetched data to update the state with required properties
      const updatedData = fetchedData.map((product) => ({
        id: product.id,
        category: product.category,
        description: product.description,
        image: product.image,
        price: product.price,
        title: product.title,
        rate: product.rate,
      }));
      // Setting the state with the updated product data
      this.setState({ productsList: updatedData });
    }
  };

  render() {
    const { productsList } = this.state;
    return (
      <>
        <Header />
        <div className="product-container">
          <h1 className="store-heading">All Products</h1>
          {/* Rendering a list of product details using the ProductDetails component */}
          <ul className="product-list-items-container">
            {productsList.map((eachItem) => (
              <ProductDetails key={eachItem.id} productDetails={eachItem} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Products;
