import React, { useState } from "react";

function PlantCard({plant, onUpdatePrice, onDeletePlant}) {

  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState('')
  const [newPriceReflect, setNewPriceReflect] = useState(plant.price)

  function handleInStock() {
    setInStock(!inStock)
  }

  function handleNewPrice(e) {
    setNewPrice(e.target.value)
  }

  function handlePriceSubmit(e) {
    e.preventDefault()
    setNewPriceReflect(newPrice)
    let plantObj = {
      id: plant.id,
      price: newPrice
    }
    onUpdatePrice(plantObj)
    setNewPrice('')
  }

  function handleDeleteClick() {
    onDeletePlant(plant)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {newPriceReflect}</p>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <form onSubmit={handlePriceSubmit}>
        <label htmlFor='new-price'>Enter New Price: </label>
        <input type='number' id='new-price' name='new-price' value={newPrice} placeholder='Enter new price...' onChange={handleNewPrice}></input>
        <button type='submit'>Change Price</button>
      </form>
      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
