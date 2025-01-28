import React, { useState } from "react";
import './TwoFactorAuthentication.css';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/Appoint.png'

function TwoFactorAuthentication() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  
  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) { // Allow only up to 5 digits
      setOtp(value);
    }
  };
  const handleVerify = () => {
    navigate("/"); 
    };
  

  return (
    <div className="container">
      <div className="frame">
        <img src={Logo} alt="2FA Image" className="image" />
        <div className='text'>
        <p className="text">Enter the  OTP sent to ******9090</p>
      </div>
      <div className="otp">
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          maxLength="5"
          className="otp-input"
          placeholder="____ " 
        />
      </div>
      <div className="text">
        <p className="text">
          Didn’t receive the code? <a href="#" className="link">Resend OTP</a>
        </p>
      </div>
      <div className="submitbtn">
        <button className="submit-btn"  onClick={handleVerify}>Verify OTP</button>
      </div>
      </div>

      

      

      

      
    </div>
  );
}

export default TwoFactorAuthentication;
