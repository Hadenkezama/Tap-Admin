import React, { useState, useEffect } from 'react'

import ManageDisplay from '../ManageDisplay'

const DrinkLoader = ({ match }) => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    try {
      fetch(`http://localhost:9000/drinks/${match.params.drink}`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const name = data.map(
            ({
              id,
              img,
              name,
              amount,
              price,
              num_in_stock,
              catagorie_id,
              wine_region_id,
              wine_colour_id,
            }) => (
              <ManageDisplay
                drink={match.params.drink}
                id={id}
                img={img}
                name={name}
                amount={amount}
                price={price}
                num_in_stock={num_in_stock}
                catagorie={catagorie_id}
                wine_colour_id={wine_colour_id}
                wine_region_id={wine_region_id}
                key={name + amount}
              />
            ),
          )
          setDrinks(name)
        })
    } catch (err) {
      console.log(err)
    }
  }, [match.params.drink])
  return (
    <div>
      <h1>Manage {match.params.drink}</h1>
      {drinks}
    </div>
  )
}

export default DrinkLoader
