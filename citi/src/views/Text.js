<<<<<<< HEAD
=======

>>>>>>> upstream/master
import React, { Component } from 'react'
import '../text.css'

class Text extends Component {
  render () {
    return (
      <div id='background-text' className='row'>
<<<<<<< HEAD
      <div id='text-logo'>
          Deseas escribirle un mensaje a María:
      </div>
        <article>
          <button className ="text-button">Enviar</button>
=======
        <div id='text-logo'>
          <p> Deseas escribirle un mensaje a María:</p>
        </div>
        <textarea className='input-field col s12' />
        <article>
          <button className='text-button waves-effect waves-light btn'>Enviar</button>
>>>>>>> upstream/master
        </article>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Text;
=======
export default Text
>>>>>>> upstream/master
