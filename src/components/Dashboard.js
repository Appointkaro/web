import React from "react";
import './dashboard.css'; 
import SalonImage from '../assets/images/salon.jpg';
import AppointImage from '../assets/images/Appoint.png';
import DoctorImage from '../assets/images/Doctor.jpg';
import EducationImage from '../assets/images/Education Consultants.jpg';
import HomeImage from '../assets/images/home.jpg';
import Legal from '../assets/images/legal.jpg';
import RealEstate from '../assets/images/Real-Estates.jpg';

const DashBoard = () => {
  // Handle smooth scroll on anchor clicks
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust scroll position (offset) by 70px
        behavior: 'smooth', // Enable smooth scroll
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={AppointImage} alt="AppointKaro Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home" onClick={(e) => handleClick(e, '#home')}>Home</a></li>
            <li><a href="#services" onClick={(e) => handleClick(e, '#services')}>Services</a></li>
            <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>About</a></li>
            <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Revolutionizing Appointments</h1>
          <p>Save time, avoid queues, and get ahead with <strong>AppointKaro</strong>.</p>
          <p className="sub-details">Manage appointments effortlessly across various sectors such as healthcare, legal services, salons, and more. Stay ahead of your schedule with real-time updates and smart notifications.</p>
          <a href="#services" onClick={(e) => handleClick(e, '#services')} className="cta-button">Explore Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
        </div>
          <div className="services-grid">
            <div className="service-card">
              <img src={DoctorImage} alt="Doctor Appointments" />
              <h3>Doctor Appointments</h3>
              <p>Find doctors, book instantly, and save time.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={SalonImage} alt="Salon Services" />
              <h3>Salon Services</h3>
              <p>Book your next salon appointment without the wait.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={Legal} alt="Legal Consultations" />
              <h3>Legal Consultations</h3>
              <p>Schedule legal advice sessions effortlessly.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={HomeImage} alt="Home Services" />
              <h3>Home Services</h3>
              <p>From plumbing to cleaning, book home services now.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={RealEstate} alt="Real-Estate Services" />
              <h3>Real-Estate Services</h3>
              <p>Book your next real-estate expert appointment without the wait.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={EducationImage} alt="Education Consultants" />
              <h3>Education Consultant</h3>
              <p>Find Educational Consultants for career planning. Book now and save time.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={DoctorImage} alt="Doctor Appointments" />
              <h3>Doctor Appointments</h3>
              <p>Find doctors, book instantly, and save time.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
            <div className="service-card">
              <img src={SalonImage} alt="Salon Services" />
              <h3>Salon Services</h3>
              <p>Book your next salon appointment without the wait.</p>
              <a href="/bookAppointment" className="details-link">Book appointment</a>
            </div>
          </div>
       
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
      <div class="container">
            <h2>About AppointKaro</h2>
      </div>
      <div class="manifest">
            <p>AppointKaro is designed to streamline the way you book appointments across industries. From salons to doctors, legal services to home services, we've got you covered. Our mission is to reduce the 1 year and 2 months you spend waiting in your life.</p>
            <p>Experience the ease of dynamic availability updates from service providers, ensuring you're always in control of your time.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          </div>
          <div className="testimonials">
            <blockquote>"AppointKaro has saved me hours of waiting at salons and doctors' clinics. Highly recommend!"</blockquote>
            <cite>– A Happy Customer</cite>
          </div>
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="centering">Contact Us</h2>
          </div>
          <p>Email: <a href="mailto:contact@appointkaro.com">contact@appointkaro.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1-234-567-890</a></p>
          <p>Follow us:</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 AppointKaro. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default DashBoard;
