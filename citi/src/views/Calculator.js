import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exchangeRate } from '../actions'
import { bindActionCreators } from 'redux'
import '../calculator.css'
import Mexico from '../assets/mexico.svg'
import Usa from '../assets/usaflag.jpg'
import './calculator.css'
class Calculator extends Component {
constructor(props) {
    super(props)
    this.handleMultiply = this.handleMultiply.bind(this)
    this.state = {
      count: 18.97
  }
}
handleMultiply() {
  this.setState((preveState) =>{
    return{
      count: preveState.multiply * 18.97
    }
  })
}
onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
  render () {
    return (
      <div id='background-calculator' className='row'>
        <div id='name-logo'>
          <div className='money-exchange' />
        </div>

        <div className='money-exchange'>
          <p> Hoy, tipo de cambio: <br />$18.97 pesos mexicano.</p>
          <img src='https://vidatel.com.br/wp-content/uploads/2017/02/money-coin-or-button-with-dollar-sign-in-black-circle.png' width='50px' />
        </div>
        <div className='row'>
          <div className='movements'>
            <p className='center'>Movimientos</p>
            <div className='col s5'><img className='usa_img'src={Usa} /></div>

            <input className='movement-us col s5 offset-s5 'type='number' name='number2'  value = {
              this.state.names
            } onChange = {
              this.onChange
            } placeholder='cantidad enviada' />
            <div className='col s5'><img className='mexico_img'src={Mexico} /></div>
            <input className='movement-mx col s5 offset-s5'type='text' placeholder='cantidad recibida' multiply = {this.multiply} />
          </div>
        </div>
        <div className='transfer'>
          <div className='container'>
            <div className='row'>
              <div className='col s12 board'>
                <table className='simple-board'>

                  <ul className='status'>Resumen   <span className='status_price '> $00.00</span></ul>
                  <ul className='status'>Cantidad Enviada <span className='status_price'>$00.00</span></ul>
                  <ul className='status'>Comisiones <span className='status_price'>$00.00</span></ul>
                  <ul className='status'>Total <span className='status_price'>$00.00</span></ul>

                </table>
                <button id='send-transfer'>Enviar</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    citi: state.citi
  }
}
// This component dispatch an action to store
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ exchangeRate }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
