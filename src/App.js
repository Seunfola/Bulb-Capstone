import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import { Fragment } from "react";
import Product from "./component/Product";
import Register from "./component/Register/Register";
import Cart from "./component/Cart";
import About from "./component/About";
import Checkout from "./component/Checkout/Checkout";
import Footer from "./component/footer/Footer";
import LoginD from "./component/Login/LoginD";
import ForgetPasswrd from "./component/ForgetPasswrd/ForgetPasswrd";
import Order from "./component/Order";
import { Toast, Toaster } from "react-hot-toast";

function App() {
  return (
    <>

      <Toaster />
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginD />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/forgetpasswrd" element={<ForgetPasswrd />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
