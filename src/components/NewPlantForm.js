import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {

  const [newPlantName, setNewPlantName] = useState('')
  const [newPlantImage, setNewPlantImage] = useState('')
  const [newPlantPrice, setNewPlantPrice] = useState('')

  function handleNewPlantName(e) {
    setNewPlantName(e.target.value)
  }

  function handleNewPlantImage(e) {
    setNewPlantImage(e.target.value)
  }

  function handleNewPlantPrice(e) {
    setNewPlantPrice(e.target.value, newPlantPrice)
  }

  function handlePlantSubmit(e) {
    e.preventDefault()
    let plantObj = {
      name: newPlantName,
      image: newPlantImage,
      price: newPlantPrice
    }

    onAddPlant(plantObj)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange={handleNewPlantName}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlantImage} onChange={handleNewPlantImage}/>Image
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantPrice} onChange={handleNewPlantPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
