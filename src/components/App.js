import React, { useState, useEffect } from "react";
import Header from "./Header";

import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function addPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(newPlant),
    })
      .then(r => r.json())
      .then(newItem => setPlants([...plants, newItem]))
  }

  function addSearchPlant(search) {
    setSearchPlant(search)
  }

  function updatePrice(newPrice) {
    fetch(`http://localhost:6001/plants/${newPrice.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        price: parseFloat(newPrice.price),
      }),
    })
    .then(r => r.json())
    .then(updatedItem => console.log(updatedItem))
  }

  function deletePlant(plantToDelete) {
    fetch(`http://localhost:6001/plants//${plantToDelete.id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => setPlants(plants.filter(plant => plant.id !== plantToDelete.id)))
  }

  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchPlant.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filterPlants} onAddPlant={addPlant} onAddSearchPlant={addSearchPlant} onUpdatePrice={updatePrice} onDeletePlant={deletePlant}/>
    </div>
  );
}

export default App;
