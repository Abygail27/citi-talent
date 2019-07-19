import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
// import Home from '../views/Home'
// import History from '../views/History'

class Nav extends Component {
  componentDidMount () {
    var elem = document.querySelector('.sidenav')
    var instance = M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 300

    })
    console.log(instance)
  }
  render () {
    return (
      <div className='row '>
        <nav>
          <div className='nav-wrapper nav-mobile black text-white  '>
            <a href='#' data-target='slide-out' class='sidenav-trigger'><i className='material-icons hamburguer-menu'>menu</i></a>
            <a href='#' className='brand-logo'><NavLink className='grey-text text-darken-3 font-nav-logo' to='/home' /></a>
            <ul className='right hide-on-med-and-down'>
              <li> <NavLink className='grey-text text-darken-3' to='/home'>Home</NavLink></li>

              <li><NavLink className='grey-text text-darken-3 ' to='/history'>Transacciones</NavLink></li>
              <li><NavLink className='grey-text text-darken-3 ' to='/calculator'>Calculadora</NavLink></li>
              <li><NavLink className='grey-text text-darken-3 ' to='/text'>Mensajes</NavLink></li>
         
            </ul>
          </div>
        </nav>
        <ul id='slide-out' className='sidenav'>
          <li><div className='user-view'>
            <div className='background' />
          </div></li>
          <div className='options-on-side-nav'>
            <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/login'>Login</NavLink></li>
            <li><div class='divider' /></li>
            <li> <NavLink className='grey-text text-darken-3 font-nav-mobile' to='/home'>Home</NavLink></li>
            <li><div class='divider' /></li>
            <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/history'>Movimientos</NavLink></li>
            <li><div className='divider' /></li>
            <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/calculator'>Calculadora</NavLink></li>
            <li><div class='divider' /></li>
            <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/text'>Mensaje</NavLink></li>
            <li><div class='divider' /></li>
          </div>
        </ul>

      </div>

    )
  }
}

export default Nav
