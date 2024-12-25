import React, { useState } from "react";
import "./signUp.css"; // Import the CSS for styling
import { Link } from "react-router-dom";
import Logo from '../assets/images/Appoint.png'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    const newErrors = {};
    const flag = false
    if(!formData.name){
      newErrors.name = 'Name is required';
      flag = true
    } 
    if(!formData.mobile){
      newErrors.mobile = 'Mobile Number is required';
      flag = true
    } 
    if(!formData.email){
      newErrors.email = 'Email is required';
      flag = true
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      flag = true
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
      flag = true
    } 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData);
      navigate('/');
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
                  {errors.name && <span className="error">{errors.name}</span>}

                  <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      required />
                  {errors.mobile && <span className="error">{errors.mobile}</span>}

                  <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required />
                  {errors.email && <span className="error">{errors.email}</span>}
                  <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                      required />
                  {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                  <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required />
                  <button type="submit" className="create-account-btn" >
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
