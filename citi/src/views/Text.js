
import React, { Component } from 'react'
import '../text.css'

class Text extends Component {
  render () {
    return (
      <div id='background-text' className='row'>
        <div id='text-logo'>
          <p> Deseas escribirle un mensaje a María:</p>
        </div>
        <textarea className='input-field col s12' />
        <article>
          <button className='text-button waves-effect waves-light btn'>Enviar</button>
        </article>
      </div>
    )
  }
}

export default Text
