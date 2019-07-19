import React from 'react'
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import History from './views/History'
import Status from './views/Status'
import Carousel from './views/Carousel'
import Home from './views/Home'
import Nav from './components/Nav'
import Calculator from './views/Calculator'
import Text from './views/Text'

const Routes = () => {
  return (
    <BrowserRouter>
      <div >
        <Nav />
        <Route path='/' exact component={Login} />
        <Route path='/history' component={History} />
        <Route path='/home' component={Home} />
        <Route path='/status' component={Status} />
        <Route path='/contact' component={Carousel} />
        <Route path='/register' component={Register} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/text' component={Text} />

      </div>
    </BrowserRouter>
  )
}

export default Routes
