import React from "react";
import "./forgetpasswrd.css";
import { NavLink } from "react-router-dom";

const ForgetPasswrd = () => {
  return (
    <div>
      <div className="form-gap"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4 m-auto">
            <div className="panel-body  ">
              <div className="panel panel-default ">
                <div className="text-center ">
                  <h3>
                    <i className="fa fa-lock fa-2x"></i>
                  </h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="panel-body">
                    <form
                      id="register-form"
                      role="form"
                      autocomplete="off"
                      className="form"
                      method="post"
                    >
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="email address"
                            className="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <NavLink to="/register">

                          <div className="button">
                            <button className="btn btn-outline-primary ms-2 px-4" type="submit" >Register</button>
                          </div>

                        </NavLink>
                        <div className="button">
                          <button className="btn btn-outline-primary ms-2 px-4" type="submit" >Reset</button>
                        </div>

                      </div>

                      <input
                        type="hidden"
                        name="token"
                        id="token"
                        value=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswrd;
