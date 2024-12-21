import React from 'react';
import './profileContainer.css'

const ProfileContainer = () => {
  return (
    <div className="user-profile-container">
  <div className="user-info">
    <div className="user-details">
      <h3>Srinivas</h3>
      <p>Admin</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>
    </div>
    <div className='img-Container'>
    <img
      src="https://via.placeholder.com/50" // Replace with the actual user image URL
      alt="User"
      className="user-image"
    />
    </div>
    
  </div>
</div>

  );
};

export default ProfileContainer;
