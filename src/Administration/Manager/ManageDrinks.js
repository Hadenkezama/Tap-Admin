import React from 'react'
import { Link } from 'react-router-dom'

const ManageDrinks = () => {
  return (
    <ul>
      <Link to="managedrinks/beers">
        <li>Beers</li>
      </Link>
      <Link to="managedrinks/wines">
        <li>Wines</li>
      </Link>
      <Link to="managedrinks/spirits">
        <li>Spirits</li>
      </Link>
      <Link to="managedrinks/coolers_ciders">
        <li>Coolers & Ciders</li>
      </Link>
      <Link to="managedrinks/liqueurs">
        <li>Liqueurs</li>
      </Link>
      <Link to="managedrinks/other">
        <li>Other</li>
      </Link>
    </ul>
  )
}

export default ManageDrinks
