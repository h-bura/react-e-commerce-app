import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp";
import Checkout from "./component/Checkout";
import Profile from "./component/Profile";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={SignUp} />
        <Route exact path="/checkout" Component={Checkout} />
      </Routes>
    </>
  );
}

export default App;
