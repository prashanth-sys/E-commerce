import { Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import ProductCard from "./components/ProductCard";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/products/:id" component={ProductCard} />
    <Route exact path="/about" component={AboutUs} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
);
export default App;
