import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../auth'

const AdminApp = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push('/')
          })
        }}
      >
        Logout
      </button>
      <Link to="/managedrinks">Manage drinks</Link>
      <Link to="/managecatagories">Manage catagories</Link>
      <Link to="/vieworders">View orders</Link>
      <Link to="/orderhistory">View history</Link>
    </div>
  )
}

export default AdminApp
