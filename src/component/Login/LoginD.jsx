import React, { useEffect, useRef, useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const LoginD = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const Navigate = useNavigate();

  // const password = useRef();
  console.log(user.current?.value)
  useEffect(() => { userRef.current.focus(); },
    [])
  useEffect(() => { setErrMsg(''); }, [user, pass])

  const handleSubmit = (e) => {
    e.preventDefault();

    const toastId = toast.loading('loading...');

    const axios = require('axios');
    let data = JSON.stringify({
      "username": user.current?.value,
      get "user_name"() {
        return this["_user_name"];
      },
      set "username"(value) {
        this["username"] = value;
      },
      "password": pass
    });

    let config = {
      method: 'get',
      url: 'https://emart-7or5.onrender.com/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then((response) => {
        Navigate("/login");
        window.location.reload();
        toast.success('Login successfully', {
          id: toastId,
        },)
      })
      .catch((error) => {
        console.log(error);
      });

    setUser('');
    setPass('');
    setSuccess(true);

  };

  return (

    <div class="auth-page-wrapper pt-3">
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} areia-live="assertive">
          {errMsg}
        </p>
      </section>
      <div class="card mt-5 login-bg">
        <div class="text-center m-2">
          <h3 class="text-dark mt-3">Login to Your Account</h3>
        </div>

        <div className="container p-3 m-auto">
          <div class="mt-1">
            <div
              className="inputs-container"
              style={{ width: "30%", margin: "auto" }}
            >
              <label for="username" class="form-label">
                Username
              </label>
              <input

                onChange={(e) => { setUser(e.target.value) }}
                id="username"
                ref={userRef}
                type="text"
                value={user}

                // ref={username}
                class="form-control mb-1"
                placeholder="Enter username"
                required
              />

              <label class="form-label" for="password-input">
                Password
              </label>
              <div class="position-relative auth-pass-inputgroup mb-3">
                <input

                  type="password"
                  value={pass}
                  onChange={(e) => { setPass(e.target.value) }}
                  class="form-control pe-5 password-input"
                  placeholder="Enter password"
                  required
                />
              </div>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="auth-remember-check"
              />
              <label class="form-check-label px-3" for="auth-remember-check">
                Remember me
              </label>

              <NavLink to="/forgetpasswrd" class="text-muted float-end">
                Forgot password?
              </NavLink>

            </div>
            <button
              class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
              type="submit"
              id="password-addon"
              onSubmit={handleSubmit}
              style={{ padding: "5px " }}
            >
              <i class="ri-eye-fill align-middle"></i>
            </button>
          </div>
        </div>

        <div class="form-check w-100 d-flex justify-center align-items-center p-4 ">
          <button
            type="submit"
            name="btnlogin"
            value="Login"
            class="btn btn-outline-dark px-5 m-auto" onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginD;
