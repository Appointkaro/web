import React, { useState } from 'react';
import './sideNav.css'; // Assuming CSS is in App.css file

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidenav visibility
  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${'open'}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={toggleSidenav}>&times;</a>
        <a href="#">Home</a>
        <a href="#">Bookings</a>
        <a href="#">Favourites</a>
        <a href="#">Settings</a>
      </div>

      
    </div>
  );
};

export default SideNav;
