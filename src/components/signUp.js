import React, { useState } from "react";
import "./signUp.css"; // Import the CSS for styling
import { Link } from "react-router-dom";
import Logo from '../assets/images/Appoint.png'


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  return (
    <><div className="container">
          <img src={Logo} alt="Centered Image" className="top-middle-image" />
      </div><div className="create-account-container">
              <h1 className="title">Create Account</h1>
              <p className="subtitle">Create a new account</p>
              <form className="form" onSubmit={handleSubmit}>
                  <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required />
                  <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      required />
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
                  <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required />
                  <button type="submit" className="create-account-btn">
                      CREATE ACCOUNT
                  </button>
              </form>
              
              <div className="account">
                Already have an account ?  <Link to='/'> Login</Link>
             </div>
             <span className='gap' >or</span>
              <div className="Gmail"><a href='' className="gmail" >Continue with Gmail</a></div>
          </div></>
  );
};

export default SignUp;
