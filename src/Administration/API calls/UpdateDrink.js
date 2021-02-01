import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const UpdateDrink = ({ match }) => {
  const { drink } = useLocation().state
  const id = match.params.updatedrink

  const [name, setName] = useState('name')
  const [img, setImg] = useState('img')
  const [amount, setAmount] = useState(0)
  const [num_in_stock, setNum_in_stock] = useState(0)
  const [price, setPrice] = useState(0)
  const [catagorie_id, setCatagorie_id] = useState(0)

  useEffect(() => {
    const getDrinkForUpdate = async () => {
      const [
        { name, img, amount, num_in_stock, price, catagorie_id },
      ] = await fetch(`http://localhost:9000/drinks/${drink}/${id}`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
        },
      })
        .then((response) => response.json())
        .catch((err) => console.log(err))
      console.log(name)

      setName(name)
      setImg(img)
      setAmount(amount)
      setNum_in_stock(num_in_stock)
      setPrice(price)
      setCatagorie_id(catagorie_id)
    }
    getDrinkForUpdate()
  }, [drink, id])

  const applyDrinkUpdate = async () => {
    console.log(name)
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
      },
      mode: 'cors',
      body: JSON.stringify({
        name: name,
        img: img,
        amount: amount,
        num_in_stock: num_in_stock,
        price: price,
        catagorie_id: catagorie_id,
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
      />
      <h3>Catagorie: </h3>
      <input
        type="number"
        value={catagorie_id}
        onChange={(event) => setCatagorie_id(event.target.value)}
      />
      <button onClick={() => applyDrinkUpdate()}>Submit Update</button>
    </div>
  )
}

export default UpdateDrink
