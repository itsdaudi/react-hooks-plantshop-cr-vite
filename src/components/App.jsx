import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search"
import NewPlantForm from "./NewPlantForm";
import PlantCard from "./PlantCard";
import PlantList from "./PlantList";


function App(){
  //store
  const [plants, setPlants] =useState([]);
  //search
  const [searchTerm, setSearchTerm] =useState('');
  //fetch
  useEffect(() =>{
    fetchPlants();
  },[]);

  // Function to fetch plants from backend
  const fetchPlants = async () => {
    try {
      const response = await fetch('http://localhost:6001/plants');
      const data = await response.json();
      setPlants(data); // Store plants in state
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

function handleUpdateStock(id) {
  const updatedPlants = plants.map((plant) =>
    plant.id === id
      ? { ...plant, inStock: !plant.inStock }
      : plant
  );

  setPlants(updatedPlants);
}



  function handleUpdateStock(id) {
  const updatedPlants = plants.map((plant) =>
    plant.id === id
      ? { ...plant, inStock: !plant.inStock }
      : plant
  );

  setPlants(updatedPlants);
}



  return (
    <div className="app">
      <h1>Plantsy</h1>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="plant-list">
        {filteredPlants.map(plant => (
          <PlantCard 
            key={plant.id} 
            plant={plant} 
            onUpdateStock={handleUpdateStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
