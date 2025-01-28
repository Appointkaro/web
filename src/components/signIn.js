import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signIn.css";
import Logo from '../assets/images/Appoint.png';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validation check
    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }
    navigate("/dashboard");
    // Mock login check (you should replace this with actual authentication logic)
    // if (email === "reshma.kakimanu@com" && password === "password123") {
    //   // Navigate to the dashboard page after successful login
     
    //   // Reset the form data after successful login
    //   setFormData({
    //     email: "",
    //     password: "",
    //   });
    // } else {
    //   // Display error message for invalid credentials
    //   setErrorMessage("Invalid email or password.");
    // }
  };

  return (
    <>
      <div className="container">
        <img src={Logo} alt="Centered Logo" className="top-middle-image" />
      </div>
      
      <div className="create-account-container">
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Login</p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="account">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="create-account-btn">
            Login
          </button>
        </form>

        <div className="account">
          Don't have an account? <Link to="/signup">Create a new account</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
