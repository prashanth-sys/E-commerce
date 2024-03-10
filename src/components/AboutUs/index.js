import "./index.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const AboutUs = () => (
  <div>
    {/* Header component */}
    <Header />
    {/* Heading */}
    <h1 className="store-heading">About Us</h1>
    {/* Description */}
    <p className="description">
      Welcome to [Your E-Commerce Store], where shopping meets convenience! We
      are dedicated to providing our customers with a seamless online shopping
      experience, offering a wide range of high-quality products at competitive
      prices.
    </p>
    {/* Description */}
    <p className="description">
      At [Your E-Commerce Store], we believe in putting our customers first.
      Whether you're shopping for fashion, electronics, home essentials, or
      gifts for your loved ones, we've got you covered. Our user-friendly
      website and secure payment options ensure that your shopping experience is
      hassle-free and enjoyable.
    </p>
    {/* Description */}
    <p className="description">
      With fast and reliable shipping, easy returns, and exceptional customer
      service, we strive to exceed your expectations every step of the way. Shop
      with confidence at [Your E-Commerce Store] and discover the convenience of
      online shopping at its best!
    </p>
    {/* Shop Now button with link to products page */}
    <Link to="/products" className="link">
      <button type="button" className="shop-now">
        Shop Now
      </button>
    </Link>
  </div>
);

export default AboutUs;
