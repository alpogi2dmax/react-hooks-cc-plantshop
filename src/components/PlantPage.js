import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant, onAddSearchPlant}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onAddSearchPlant={onAddSearchPlant}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
