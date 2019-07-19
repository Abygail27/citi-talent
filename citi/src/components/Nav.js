import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import materialize from 'materialize-css'
// import Home from '../views/Home'
// import History from '../views/History'

class Nav extends Component {
    componentDidMount () {
        var elem = document.querySelector('.sidenav')
        var instance = materialize.Sidenav.init(elem, {
          edge: 'left',
          inDuration: 300
    
        })
        console.log(instance)
      }
    render() {
        return (
            <div className='row '>
            <nav>
              <div className='nav-wrapper nav-mobile black text-white  '>
                <a href='#' data-target='slide-out' class='sidenav-trigger'><i className='material-icons hamburguer-menu'>menu</i></a>
                <a href='#' className='brand-logo'><NavLink className='grey-text text-darken-3 font-nav-logo' to='/home'>Home</NavLink></a>
                <ul className='right hide-on-med-and-down'>
                  <li> <NavLink className='grey-text text-darken-3 font-nav' to='/home'>Home</NavLink></li>
                  <li> <NavLink className='grey-text text-darken-3 font-nav' to='/carousel'>Carrusel</NavLink></li>
                  <li><NavLink className='grey-text text-darken-3 font-nav' to='/history'>Historial</NavLink></li>
                  <li><NavLink className='grey-text text-darken-3 font-nav' to='/login'>Login</NavLink></li>
                  <li><NavLink className='grey-text text-darken-3 font-nav' to='/register'>Registro</NavLink></li>
                  <li><NavLink className='grey-text text-darken-3 font-nav' to='/status'>Estatus</NavLink></li>
        
                </ul>
              </div>
            </nav>
            <ul id='slide-out' class='sidenav'>
              <li><div class='user-view'>
                <div class='background' />
           
                
              </div></li>
              <div className='options-on-side-nav'>
                <li> <NavLink className='grey-text text-darken-3 font-nav-mobile' to='/home'>Home</NavLink></li>
                <li><div class='divider' /></li>
                <li> <NavLink className='grey-text text-darken-3 font-nav-mobile' to='/carousel'>Carrusel</NavLink></li>
                <li><div class='divider' /></li>
                <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/history'>Historial</NavLink></li>
                <li><div class='divider' /></li>
                <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/login'>Login</NavLink></li>
                <li><div class='divider' /></li>
                <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/register'>Registro</NavLink></li>
                <li><div class='divider' /></li>
                <li><NavLink className='grey-text text-darken-3 font-nav-mobile' to='/status'>Estatus</NavLink></li>
                <li><div class='divider' /></li>
              </div>
            </ul>

          </div>
         
        )
    }
}

export default Nav
