import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";
import ProductShowcase from "./Pages/ProductShowcase/ProductShowcase";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import FloatingCart from "./Components/FloatingCart/FloatingCart";

function App() {
  return (
    <Router>
      <Navbar />
      <FloatingCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produits" exact component={Products} />
        <Route path="/produits/:id" exact component={ProductShowcase} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/shoppingCart" exact component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
