import React from 'react'
import './styles.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLogin from './Administration/AdminLogin'
import AdminApp from './Administration/AdminApp'
import ManageCatagories from './Administration/Manager/ManageCatagories'
import ManageDrinks from './Administration/Manager/ManageDrinks'
import ViewOrders from './Administration/Orders/IncomingOrders'
import OrderHistory from './Administration/Orders/OrderHistory'
import { ProtectedRoute } from './Administration/ProtectedRoute'
import DrinkLoader from './Administration/Manager/Loaders/DrinkLoader'
import UpdateDrink from './Administration/API calls/UpdateDrink'

const AdminRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AdminLogin} />
        <ProtectedRoute exact path="/adminapp" component={AdminApp} />
        <ProtectedRoute
          exact
          path="/managecatagories"
          component={ManageCatagories}
        />
        <ProtectedRoute exact path="/managedrinks" component={ManageDrinks} />
        <ProtectedRoute exact path="/vieworders" component={ViewOrders} />
        <ProtectedRoute exact path="/orderhistory" component={OrderHistory} />
        <ProtectedRoute
          exact
          path="/managedrinks/:drink"
          component={DrinkLoader}
        />
        <ProtectedRoute
          exact
          path="/updatedrink/:updatedrink"
          component={UpdateDrink}
        />
        <Route path="*" component={() => '404 NOT FOUND'} />
      </Switch>
    </Router>
  )
}

export default AdminRouter
