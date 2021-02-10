import React, { useState } from 'react'

const AllCatagorieFetcher = () => {
  const [catagorie, setCatagorie] = useState('')
  const [catagories, setCatagories] = useState([])

  const CatagorieFetch = async ({ drink }) => {
    await fetch(`http://localhost:9000/catagories/${drink}`)
      .then((response) => response.json())
      .then((data) => {
        const arr = data.map(({ catagorie }) => catagorie)
        setCatagories(arr)
      })
      .catch((err) => console.log(err))

    return (
      <label htmlFor="catagorie">
        Catagorie
        <select
          id="catagorie"
          value={catagorie}
          onChange={(event) => setCatagorie(event.target.event)}
        >
          {catagories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    )
  }

  const WineColourFetch = async ({ drink }) => {
    await fetch(`http://localhost:9000/catagories/wine_colour`)
      .then((response) => response.json())
      .then((data) => {
        const arr = data.map(({ catagorie }) => catagorie)
        setCatagories(arr)
      })
      .catch((err) => console.log(err))

    return (
      <label htmlFor="catagorie">
        Catagorie
        <select
          id="catagorie"
          value={catagorie}
          onChange={(event) => setCatagorie(event.target.event)}
        >
          {catagories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    )
  }

  const WineRegionFetch = async () => {
    await fetch(`http://localhost:9000/catagories/wine_region`)
      .then((response) => response.json())
      .then((data) => {
        const arr = data.map(({ catagorie }) => catagorie)
        setCatagories(arr)
      })
      .catch((err) => console.log(err))

    return (
      <label htmlFor="catagorie">
        Catagorie
        <select
          id="catagorie"
          value={catagorie}
          onChange={(event) => setCatagorie(event.target.event)}
        >
          {catagories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    )
  }
  return { WineColourFetch, WineRegionFetch, CatagorieFetch }
}

export default AllCatagorieFetcher
