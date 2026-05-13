import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  // State for form inputs
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Create new plant objectconst newPlant 
  const newPlant={
  name: name,
  image: image,
  price: Number(price),
};

    
    try {
      // Send to backend
      const response = await fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlant)
      });
      
      const savedPlant = await response.json();
      
      // Add to parent component's state
      onAddPlant(savedPlant);
      
      // Clear form
      setName('');
      setImage('');
      setPrice('');
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;