import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Home from '../views/Home'
import History from '../views/History'

class Nav extends Component {
   
    render() {
        return (
      

            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul className='right hide-on-med-and-down'>
              <li> <Link className='' to='/home'>Home</Link></li>
              <li> <Link className='' to='/history'>History</Link></li>
              <li> <Link className='' to='/carousel'>Carrusel</Link></li>
              <li> <Link className='' to='/login'>Login</Link></li>
              <li> <Link className='' to='/register'>Registro</Link></li>
              <li> <Link className='' to='/status'>Estatus</Link></li>
            </ul>
            </div>
          </nav>
                
         
        )
    }
}

export default Nav
