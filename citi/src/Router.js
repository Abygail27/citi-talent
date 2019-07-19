import React from 'react'
// import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Register from './views/Register'
import Login from './views/Login'
import History from './views/History'
import Status from './views/Status'
import Carousel from './views/Carousel'
import Home from './views/Home'
import Nav from './components/Nav'

const Routes = () => {
  return (
    // <Switch>
    //  <Nav />
    //   <Route path='/' exact component={Landing} />
    //   <Route path='/register' exact component={Register} />
    //    <Route path='/login'  component={Login} />
    //    <Route path='/history'  component={History} />
    //    <Route path='/home' component={Home} />
    //    <Route path='/status' component={Status} />
    //    <Route path='/contact'  component={Carousel} />
      
    // </Switch>
    
    <BrowserRouter>
    <div >
      <Nav  />
      {/* <Route path ="/login" component={LoginFirebase}/> */}
      <Route path='/' exact component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/history' component={History} />
      <Route path='/home' component={Home} />
       <Route path='/status' component={Status} />
       <Route path='/contact'  component={Carousel} />
       <Route path='/register'  component={Register} />
       
    </div>
  </BrowserRouter>
  )
}

export default Routes
