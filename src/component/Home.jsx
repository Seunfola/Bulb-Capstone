import React from "react";
import background from "./asset/background.jpg";
import Products from "./Products";
import About from "./About";
import Footer from "../component/footer/Footer";

import LoginD from "./Login/LoginD";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card text-bg-dark border-0">
        <img
          src={background}
          className="card-img"
          alt="background"
          height="500px"
          width="fit-content"
        />
        <div className="card-img-overlay ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mt-5 mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-3 mt-4 text-light ">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
