import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  // Navigation container
  <nav className="nav-container">
    {/* Logo */}
    <div>
      <img
        src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1709984726/1156738_amazon_logo_ecommerce_shopping_icon_ccbpv1.png"
        alt="logo"
        className="logo"
      />
    </div>
    {/* List of navigation items */}
    <ul className="list-items">
      {/* Home link */}
      <Link to="/" className="link">
        <li className="list">Home</li>
      </Link>
      {/* Products link */}
      <Link to="/products" className="link">
        <li className="list">Products</li>
      </Link>
      {/* About link */}
      <Link to="/about" className="link">
        <li className="list">About</li>
      </Link>
    </ul>
    {/* Logout button */}
    <Link to="/login" className="link">
      <button type="button" className="logout-button">
        Logout
      </button>
    </Link>
  </nav>
);

export default Header;
