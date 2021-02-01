import axios from 'axios'

axios.defaults.withCredentials = true

class Auth {
  constructor() {
    this.authenticated = false
  }

  async login(username, password) {
    await axios({
      method: 'POST',
      url: 'http://localhost:9000/admin/login/',
      data: { name: username, password: password },
    }).then((response) => {
      if (!response.data.auth) {
        this.authenticated = false
      } else {
        localStorage.setItem('auth-token', response.data.token)
        this.authenticated = true
      }
    })
  }

  logout(cb) {
    localStorage.removeItem('auth-token')
    this.authenticated = false
    cb()
  }

  isAuthenticated() {
    return this.authenticated
  }
}

export default new Auth()
