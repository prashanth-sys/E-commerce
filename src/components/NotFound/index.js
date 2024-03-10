import "./index.css";

import Header from "../Header"; // Importing Header component
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

const NotFound = () => (
  <>
    <Header /> {/* Rendering the Header component */}
    <div className="not-found">
      {/* Image for the "Page Not Found" illustration */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not-found"
        className="not-found-img"
      />
      <h1 className="store-heading">Page Not Found</h1>
      {/* Link to navigate back to the products page */}
      <Link to="/products" className="link">
        <button className="shop-now" type="button">
          Shop Now
        </button>
      </Link>
    </div>
  </>
);
export default NotFound;
