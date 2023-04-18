import React from "react";
import { useState } from "react";
import "./register.css";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import authService from "../auth.service";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);

  // const registerHandler = (

  const Navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();



    let data = JSON.stringify({
      "first_name": firstName,
      "last_name": lastName,
      "user_name": userName,
      "email": email,
      "phone_number": number,
      "password": password
    });


    authService.register(data).then((response) => {

      console.log(response)
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data;
    })
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">
          Registration
        </div>
        <form onSubmit={onSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details text-start">FirstName</span>
              <input type="text" placeholder="Enter your full-Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">LastName</span>
              <input type="text" placeholder="Enter your full-Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">Username</span>
              <input type="text" placeholder="Enter your username" value={userName} onChange={(e) => { setUserName(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">E-Mail</span>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">Address</span>
              <input
                type="text"
                placeholder="Enter your Address" value={address} onChange={(e) => { setAddress(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">Phone Number</span>
              <input type="number" placeholder="Enter your number" value={number} onChange={(e) => { setNumber(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">Password</span>
              <input
                type="password"
                placeholder="Enter your Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
            </div>
            <div className="input-box">
              <span className="details text-start">Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm your Password"
                required
              />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3 text-start">
                <span className="dot three"></span>
                <span className="gender">Prefer Not to say</span>
              </label>
            </div>
            <div className="terms">
              <input type="checkbox" name="accept" />
              <span> Click to agree with terms and conditions</span>
            </div>
          </div>
          <div className="button">
            <button className="btn btn-outline-dark ms-2 px-4" type="submit" >Register</button>
          </div>
        </form>

      </div>
    </>
  );

};

export default Register;
