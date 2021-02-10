import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
//import AllFetch from './AllCatagorieFetcher'

const UpdateDrink = ({ match }) => {
  const { drink } = useLocation().state
  const id = match.params.updatedrink
  const [name, setName] = useState('name')
  const [img, setImg] = useState('img')
  const [amount, setAmount] = useState(0)
  const [num_in_stock, setNum_in_stock] = useState(0)
  const [price, setPrice] = useState(0)
  const [catagorie_id, setCatagorie_id] = useState(0)
  const [wine_region, setWineRegion] = useState(0)
  const [wine_colour, setWineColour] = useState(0)

  const [catagories, setCatagories] = useState()
  const [wineRegions, setWineRegions] = useState()
  const [wineColours, setWineColours] = useState()

  useEffect(() => {
    const CatagorieFetch = async () => {
      await fetch(`http://localhost:9000/catagories/${drink}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setCatagories(data)
        })
        .catch((err) => console.log(err))
    }

    const WineColourFetch = async () => {
      await fetch(`http://localhost:9000/catagories/wine_colour`)
        .then((response) => response.json())
        .then((data) => {
          setWineColours(data)
        })
        .catch((err) => console.log(err))
    }

    const WineRegionFetch = async () => {
      await fetch(`http://localhost:9000/catagories/wine_region`)
        .then((response) => response.json())
        .then((data) => {
          setWineRegions(data)
        })
        .catch((err) => console.log(err))
    }

    const getDrinkForUpdate = async () => {
      await fetch(`http://localhost:9000/drinks/${drink}/${id}`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
        },
      })
        .then((response) => response.json())
        .then(
          ([
            {
              name,
              img,
              amount,
              num_in_stock,
              price,
              catagorie_id,
              wine_colour,
              wine_region,
            },
          ]) => {
            console.log()
            setName(name)
            setImg(img)
            setAmount(amount)
            setNum_in_stock(num_in_stock)
            setPrice(price)
            if (catagorie_id) {
              setCatagorie_id(catagorie_id)
            }
            if (wine_colour) {
              setWineColour(wine_colour)
            }
            if (wine_region) {
              setWineRegion(wine_region)
            }
          },
        )
        .catch((err) => console.log(err))
    }

    getDrinkForUpdate()
    if (drink !== 'wines') {
      CatagorieFetch()
    } else {
      WineColourFetch()
      WineRegionFetch()
    }
  }, [drink, id])

  const applyDrinkUpdate = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
      body: JSON.stringify({
        name: name,
        img: img,
        amount: amount,
        num_in_stock: num_in_stock,
        price: price,
        catagorie_id: catagorie_id,
        wine_colour: wine_colour,
        wine_region: wine_region,
      }),
    }
    await fetch(`http://localhost:9000/drinks/${drink}/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <h1>Update Drink</h1>
      <h3>Name:</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <h3>Image:</h3>
      <input
        type="text"
        value={img}
        onChange={(event) => setImg(event.target.value)}
      />
      <h3>Quantity of beverage: </h3>
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <h3>Number in stock</h3>
      <input
        type="number"
        value={num_in_stock}
        onChange={(event) => setNum_in_stock(event.target.value)}
      />
      <h3>Price: </h3>
      <input
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />{' '}
      <br />
      {catagories && (
        <label htmlFor="catagorie">
          Catagorie:
          <select
            id="catagorie"
            value={catagorie_id}
            onChange={(event) => setCatagorie_id(event.target.value)}
          >
            {catagories.map((item) => (
              <option key={item.catagorie_id} value={item.catagorie_id}>
                {item.catagorie}
              </option>
            ))}
          </select>
        </label>
      )}
      {wineRegions && (
        <label htmlFor="wineRegions">
          Wine Region:
          <select
            id="wineRegion"
            value={wine_region}
            onChange={(event) => setWineRegion(event.target.value)}
          >
            {wineRegions.map((item) => (
              <option key={item.catagorie_id} value={item.catagorie_id}>
                {item.catagorie}
              </option>
            ))}
          </select>
        </label>
      )}
      {wineColours && (
        <label htmlFor="catagorie">
          Wine Colour:
          <select
            id="wineColour"
            value={wine_colour}
            onChange={(event) => setWineColour(event.target.value)}
          >
            {wineColours.map((item) => (
              <option key={item.catagorie_id} value={item.catagorie_id}>
                {item.catagorie}
              </option>
            ))}
          </select>
        </label>
      )}
      <button onClick={() => applyDrinkUpdate()}>Submit Update</button>
    </div>
  )
}

export default UpdateDrink
