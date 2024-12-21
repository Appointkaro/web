import React, { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/Appoint.png'

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Account Created Successfully!");
      // Handle account creation logic here
    }
  };
  const handleVerify = () => {
    navigate("/dashboard"); 
    };
  return (
    <><div className="container">
          <img src={Logo} alt="Centered Image" className="top-middle-image" />
      </div><div className="create-account-container">
              <h1 className="title">Welcome Back</h1>
              <p className="subtitle">Login</p>
              <form className="form" onSubmit={handleSubmit}>
                  
                  <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required />
                  <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                      required />
                  <div className="account">
                      <Link to='/signup'>Forgot Password ?</Link>
                  </div>
                  <button type="submit" className="create-account-btn"  onClick={handleVerify}>
                      Login
                  </button>
              </form>
              
              <div className="account">
                Don't have account ?  <Link to='/signup'>Create a new account</Link>
             </div>
              
          </div></>
  );
};

export default SignIn;
