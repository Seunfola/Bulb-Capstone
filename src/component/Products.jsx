import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import shoes from "./asset/shoes.jpg";
import laptop from "./asset/laptop.jpg";
import necklace from "./asset/necklace.jpg";
import { Carousel } from "bootstrap";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const Carousel = () => {
    return (
      <div
        id="carouselExampleCaptions"
        class="carousel slide m-3"
        width="100%"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={shoes}
              class="d-block h-sm w-100"
              height="350px"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fw-bolder font-monospace fs-2">
                Classic Sport Shoe
              </h5>
              <p>Check our product and select your items.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={laptop} class="d-block w-100" height="350px" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fw-bolder font-monospace fs-2">
                High Grade Laptop
              </h5>
              <p>Check our product and select your items.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={necklace}
              class="d-block w-100"
              height="300px"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="fw-bolder font-monospace fs-2">
                Luxurious jewelery
              </h5>
              <p>Check our product and select your items.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const FilterProduct = ({ filter }) => {
    return (
      <>
        {filter?.map((product) => {
          console.log(product);

          return (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card text-center p-3 h-800">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="200px"
                  
                />
                <div className="card-body">
                  <h5 className="card-title mb-0 text-dark fs-6">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text fw-bold">$ {product.price}</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const sortItems = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = ({ filter }) => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => sortItems("men's clothing")}
          >
            Men's Clothings
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => sortItems("women's clothing")}
          >
            Women's Clothings
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => sortItems("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => sortItems("electronics")}
          >
            Electronics
          </button>
        </div>
        <FilterProduct filter={filter} />
      </>
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="container my-5 py-5 var">
      {<Carousel />}

      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
        <div className="col-12 mb-5"></div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts filter={filter} />}
        </div>
      </div>
    </div>
  );
};
export default Products;
