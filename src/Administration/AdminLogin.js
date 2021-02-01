import React, { useState } from 'react'

import auth from '../auth'

const AdminLogin = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        name="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        onClick={async () => {
          await auth.login(username, password)
          props.history.push('/adminapp')
        }}
      >
        Login
      </button>
    </div>
  )
}

export default AdminLogin
