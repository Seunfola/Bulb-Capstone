import React from "react";
import "../Checkout/checkout.css";

import CheckOut_cart from "./CheckOut_Cart/CheckOut_cart";
import { NavLink } from "react-router-dom";

const Checkout = (props) => {
  return (
    <div className="checkout mt-4">
      <main>
        <section class="checkout-form rounded-r-1">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header p-2">
                    <h3 class="mb-0 text-center">Checkout</h3>
                  </div>
                  <div class="card-body py-2">
                    <form className="px-5 m-auto">
                      <div class="mb-3 ">
                        <label for="name" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="address" class="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="address"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="phone" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="phone"
                          required
                        />
                      </div>
                      {/* <div class="mb-3">
                        <label for="card" class="form-label">
                          Card Number
                        </label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="card"
                            required
                          />
                          <span class="input-group-text">
                            <i class="far fa-credit-card"></i>
                          </span>
                        </div>
                      </div> */}
                      {/* <div class="mb-3">
                        <label for="expiry" class="form-label">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="expiry"
                          required
                        />
</div> */}
                      <div class="mb-3">
                        {/* <label for="cvv" class="form-label">
                          CVV
                        </label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="cvv"
                            required
                          />
                          <span class="input-group-text">
                            <i class="fas fa-question-circle"></i>
                          </span>
                        </div> */}
                        <div class=" checkbox-control">
                          <input
                            type="checkbox"
                            name="checkout-checkbox"
                            id="checkout-checkbox"
                            className="mr-5"
                          />
                          <label for="checkout-checkbox">
                            Save this information
                          </label>
                        </div>
                      </div>
                      <div class="form-control-btn">
                        <NavLink to="/order">
                          <button>continue</button>
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="checkout-details">
          <div class="checkout-details-inner">
            <div class="checkout-lists">
              <div class="card">{<CheckOut_cart />}</div>
              <p>{}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Checkout;
