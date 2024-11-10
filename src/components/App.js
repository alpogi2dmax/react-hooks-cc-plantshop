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

  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchPlant.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={filterPlants} onAddPlant={addPlant} onAddSearchPlant={addSearchPlant}/>
    </div>
  );
}

export default App;
