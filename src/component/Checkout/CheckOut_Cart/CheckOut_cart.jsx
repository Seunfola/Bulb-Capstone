import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, deleteCart } from "../../../redux/action/indexAction";

const CheckOut_cart = () => {
  const cartState = useSelector((state) => state.handleCart);



  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  const handleDel = (item) => {
    dispatch(deleteCart(item));
  };

  const CheckOutcart = (product) => {
    return (
      <>
        <div className="px-2 my-2 bg-light rounded-3 py-2">
          <div className="container py-2">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="90px"
                  width="70px"
                />
              </div>
              <div className="col-md-4">
                <h3 className="fs-6">{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>

                <button
                  className="btn btn-outline-dark me-2"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="row">
          <NavLink
            to="/products"
            className="btn btn-outline-dark m-2 w-25 mx-auto"
          >
            Shop More
          </NavLink>
        </div>
      </>
    );
  };

  const totalPrice = cartState.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );

  return (
    <div>
      {cartState.length !== 0 && cartState.map(CheckOutcart)}
      <div
        className="px-2 my-2 bg-light rounded-3 py-1 "
        style={{ width: "100%", margin: "auto" }}
      >
        <div className="container py-2 d-flex justify-content-center">
          <div>
            <p className="lead fw-bold ml-4">Total: ${totalPrice}</p>
          </div>
        </div>
      </div>

      {cartState.length !== 0 && buttons()}
    </div>
  );
};

export default CheckOut_cart;
