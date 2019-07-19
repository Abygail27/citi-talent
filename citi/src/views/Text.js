import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../text.css'

class Text extends Component {
  render () {
    return (
      <div id='background-text' className='row'>
      <div id='text-logo'>
          Deseas escribirle un mensaje a María:
      </div>
        <article>
          <button className ="text-button">Enviar</button>
        </article>
      </div>
    )
  }
}

export default Text;