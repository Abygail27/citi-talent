import React, { Component } from 'react'
import fire from './firebase'
import Login from './login'
import RouterApp from './Router'


// Contiene opciones para pasar props y render .Falta establecer la ruta por defecto ¿Window.location?¿Cómo?
class LoginFb extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  authListener () {
    fire.auth().onAuthStateChanged((user) => {  
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }
  componentDidMount () {
    this.authListener()
  }
  render () {
    return (
      <div> {this.state.user ? (<RouterApp />) : (<Login />)}</div>
    )
  }
}

export default LoginFb

