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
          const name = data.map((item) => (
            <ManageDisplay
              {...item}
              key={item.name + item.amount}
              drink={match.params.drink}
            />
          ))

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
