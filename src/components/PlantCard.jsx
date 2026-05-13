import React, { useState } from 'react';

function PlantCard({ plant, onUpdateStock }) {
  // Track if plant is in stock (default: true)
  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => {
    setInStock(prev => !prev);
    if (onUpdateStock) onUpdateStock(plant.id);
  };

  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price.toString()}</p>
      <button onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </div>
  );
}

export default PlantCard;