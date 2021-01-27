import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLogin from './Administration/AdminLogin'
import AdminApp from './Administration/AdminApp'
import ManageCatagories from './Administration/Manager/ManageCatagories'
import ManageDrinks from './Administration/Manager/ManageDrinks'
import ViewOrders from './Administration/Orders/IncomingOrders'
import OrderHistory from './Administration/Orders/OrderHistory'

const AdminRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AdminLogin} />
        <Route path="/adminapp" exact component={AdminApp} />
        <Route path="/managecatagories" exact component={ManageCatagories} />
        <Route path="/managedrinks" exact component={ManageDrinks} />
        <Route path="/vieworders" exact component={ViewOrders} />
        <Route path="/orderhistory" exact component={OrderHistory} />
      </Switch>
    </Router>
  )
}

export default AdminRouter
