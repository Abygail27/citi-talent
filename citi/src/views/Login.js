import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

class Login extends Component {
  render () {
    return (
      <div id='background-login' className='row'>
        <div id='name-logo'>
          <h4>Citi</h4>
          <h4>Contigo</h4>
        </div>

        <figure />
        <article id='input-login'>
          <input className='input-field col s8' type='number' placeholder='Teléfono' />
          <input className='input-field col s8' type='password' placeholder='Contraseña' />
        </article>
        <article>
          <button className='waves-effect waves-light btn button-login'><NavLink className='grey-text text-darken-4 font-nav' to='/home'>Inicio</NavLink></button>
        </article>
      </div>
    )
  }
}

export default Login
