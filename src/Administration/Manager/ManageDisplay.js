import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ManageDisplay = ({
  drink,
  img,
  id,
  name,
  price,
  amount,
  num_in_stock,
  catagorie_id,
  wine_colour,
  wine_region,
}) => {
  const [catagorieName, setCatagorieName] = useState()
  const [wineRegion, setWineRegion] = useState()
  const [wineColour, setWineColour] = useState()

  useEffect(() => {
    const catagorieFetch = async () => {
      console.log('Manage Display')
      const catName = await fetch(
        `http://localhost:9000/catagories/${drink}/${catagorie_id}`,
      )
        .then((response) => response.json())
        .then(([{ catagorie }]) => catagorie)
      setCatagorieName(catName)
    }

    const wineRegionFetch = async () => {
      const regionName = await fetch(
        `http://localhost:9000/catagories/wine_region/${wine_region}`,
      )
        .then((response) => response.json())
        .then(([{ catagorie }]) => catagorie)
      setWineRegion(regionName)
    }

    const wineColourFetch = async () => {
      const regionName = await fetch(
        `http://localhost:9000/catagories/wine_colour/${wine_colour}`,
      )
        .then((response) => response.json())
        .then(([{ catagorie }]) => catagorie)
      setWineColour(regionName)
    }

    if (catagorie_id) {
      catagorieFetch()
    }

    if (wine_colour) {
      wineColourFetch()
    }

    if (wine_region) {
      wineRegionFetch()
    }
  }, [
    drink,
    img,
    catagorie_id,
    price,
    amount,
    num_in_stock,
    wine_colour,
    wine_region,
  ])

  return (
    <div className="manage-display-container">
      <h5>{img}</h5>
      <h3>ID: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Price: ${price}</h3>
      <h3>Quantity: {amount}</h3>
      <h3>In Stock: {num_in_stock}</h3>
      {catagorie_id && <h3>Catagorie: {catagorieName}</h3>}
      {wine_colour && <h3>Colour: {wineColour}</h3>}
      {wine_region && <h3>Region: {wineRegion}</h3>}
      <Link to={{ pathname: `/updatedrink/${id}`, state: { drink: drink } }}>
        Update drink
      </Link>
    </div>
  )
}

export default ManageDisplay
