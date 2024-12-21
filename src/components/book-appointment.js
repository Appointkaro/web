import React, { useState, useEffect } from "react";
import './book-appointment.css'; // Make sure this file is in the same folder as your component
import Logo from '../assets/images/Appoint.png'

const BookAppointment = () => {
  const [service, setService] = useState("");

  // Auto-fill the service based on the query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      setService(serviceParam.charAt(0).toUpperCase() + serviceParam.slice(1));
    }
  }, []);

  return (
    <div>
      <header className="navbar1">
        <div className="logo">
          <img src={Logo}  alt="AppointKaro Logo" />
        </div>
      </header>

      <section className="booking-section">
        <div className="containerbook">
          <h1>Book Your Appointment</h1>
          <form action="confirm.html" method="POST">
            <label htmlFor="service">Service:</label>
            <input
              type="text"
              
            />
            
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              name="appointment-date"
              required
            />
            <label htmlFor="time">Select Time:</label>
            <input
              type="time"
              id="time"
              name="appointment-time"
              required
            />

            <button type="submit" className="cta-buttonbook">
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 AppointKaro. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BookAppointment;
