import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../index.css'

class Login extends Component {
  render () {
    return (
      <div id='background-login' className='row'>
      <div id='name-logo'>
       
       </div>
        <figure>
        </figure>
        <article id='input-login'>
          <input className='input-field col s8'  type='number' placeholder='Teléfono'></input>
          <input className='input-field col s8' type='password' placeholder='Contraseña'></input>
        </article>
        <article>
          <button className='login'><NavLink className='grey-text text-darken-4 font-nav' to='/home'>Iniciar Sessión</NavLink></button>
         
        </article>
      </div>
    )
  }
}

export default Login
