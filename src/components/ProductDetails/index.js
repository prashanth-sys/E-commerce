import "./index.css";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  // Destructuring props to access productDetails
  const { productDetails } = props;

  // Destructuring productDetails to access individual properties
  const { image, title, price, rate, id } = productDetails;

  // Rendering product details
  return (
    <Link to={`/products/${id}`} className="link">
      <li className="list">
        <div className="product-card">
          {/* Product image */}
          <img src={image} alt="Product" className="product" />

          {/* Product title */}
          <p className="title">{title}</p>

          {/* Price and rating */}
          <div className="price-rating">
            {/* Displaying price */}
            <p className="price">Rs:{price} Only/-</p>

            {/* Displaying rating */}
            <p className="rate">{rate}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ProductDetails;
