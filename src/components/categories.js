import React from 'react';
import './Dashboard'
import { FaHeartbeat, FaCut, FaSpa, FaRunning } from 'react-icons/fa'; 

const categories = [
  { id: 1, name: "Health", icon: <FaHeartbeat /> },
  { id: 2, name: "Salon", icon: <FaCut /> },
  { id: 3, name: "Beauty", icon: <FaSpa /> },
  { id: 4, name: "Fitness", icon: <FaRunning /> }
];

const CategoryItem = ({ name, icon }) => (
  <div className="category-item">
    <div className="icon">{icon}</div>
    <span>{name}</span>
  </div>
);

const CategoriesSection = () => (
  <div className="categories-section">
    {categories.map(category => (
      <CategoryItem key={category.id} name={category.name} icon={category.icon} />
    ))}
  </div>
);

export default CategoriesSection;
