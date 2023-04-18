import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";




const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  py-2 shadow-sm bg-white">
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold fs-2"
            to="/home"
            style={{ color: "#0859D4" }}
          >
            BREED's STORE
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/footer">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="button" id="navbar-btn">

              <NavLink to="/register" className="btn btn-outline-primary border-0 ms-3">
                <i className="fa fa-user me-2"></i>Register
              </NavLink>

              <NavLink to="/login" className="btn btn-outline-primary border-0 ms-3">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>

              <NavLink to="/cart" className="btn btn-outline-primary border-0 ms-3">
                <i className="fa fa-shopping-cart me-1"></i>Cart {state.length}
              </NavLink>
              <NavLink
                to=""
                className="btn btn-successful ms-3"
                style={{ color: "#0859D4" }}
              >
                <i className="fa fa-user-tie"></i> USER
              </NavLink>
            </div>
          </div>
        </div>
        
      </nav>
  
    </div>
  );
};

export default Navbar;
