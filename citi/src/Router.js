import React from 'react'
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './views/Login'
import History from './views/History'
import Home from './views/Home'
import Nav from './components/Nav'
import Calculator from './views/Calculator'

const Routes = () => {
  return (
    <BrowserRouter>
      <div >
        <Nav/>
        <Route path='/' exact component={Login} />
        <Route path='/history' component={History} />
        <Route path='/home' component={Home} />
        <Route path='/calculator' component={Calculator} />

      </div>
    </BrowserRouter>
  )
}

export default Routes
