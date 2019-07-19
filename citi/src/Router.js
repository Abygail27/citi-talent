import React from 'react'
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './views/Login'
import History from './views/History'
import Home from './views/Home'
import Nav from './components/Nav'
import Calculator from './views/Calculator'
import Text from './views/Text'
import Code from './views/Code'
import Password from './views/Password'

const Routes = () => {
  return (
    <BrowserRouter>
      <div >
        <Nav/>
        <Route path='/' exact component={Login} />
        <Route path='/history' component={History} />
        <Route path='/home' component={Home} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/text' component={Text} />
        <Route path='/code' component={Code} />
        <Route path='/password' component={Password} />
      </div>
    </BrowserRouter>
  )
}

export default Routes
