import React from 'react'
import { Link } from 'react-router-dom'

const AdminApp = () => {
  return (
    <div>
      <Link to="/managedrinks">Manage drinks</Link>
      <Link to="/managecatagories">Manage catagories</Link>
      <Link to="/vieworders">View orders</Link>
      <Link to="/orderhistory">View history</Link>
    </div>
  )
}

export default AdminApp
