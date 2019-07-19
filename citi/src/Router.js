import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Register from './views/Register'


const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/register' exact component={Register} />
      
    </Switch>
  )
}

export default Routes
