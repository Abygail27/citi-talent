import React, { Component } from 'react'
import { connect } from 'react-redux'
import {exchangeRate} from '../actions'
import { bindActionCreators } from 'redux'
import '../calculator.css'


class Calculator extends Component {

handleChange = e => {
  this.setState({value:e.target.value})
}

  componentWillMount =()=>{
    this.props.exchangeRate()
  }
  
  render(){
   
        return (
          <div id='background-calculator' className='row'>
          <div id='name-logo'>
        <div className = "money-exchange"></div>
    
          </div>
           
            <article id='information-contact'>
            Envía hasta $500 dólares sin comisión.
            </article>

           <div className = "money-exchange">
            <p> Hoy, tipo de cambio: <br></br>$18.97 pesos mexicano.</p>
          <img src = "https://vidatel.com.br/wp-content/uploads/2017/02/money-coin-or-button-with-dollar-sign-in-black-circle.png" width = "50px"></img>
             
           </div>

          <div className = "movements">
            <p>Movimientos</p>
         <input className = "movement-us"type = "text" placeholder = "cantidad enviada" Onchange = {this.handleChange}></input>
         <input className = "movement-mx"type = "text" placeholder = "cantidad recibida" ></input>
          </div>
         
         <div className = "transfer">
         <div className="container">
        <div className="row">
          <div className="col s12 board">
            <table id="simple-board">
               <tbody style = {{
                 fontWeight: '500',
                 fontSize: '14px'
               }}> Resumen

           <ul>Cantidad Enviada</ul>
           <ul>Comisiones</ul>
           <ul>Total</ul>
               </tbody>
             </table>
             <button id = "send-transfer">Enviar</button>
          </div>
        </div>
      </div>
         </div>

          </div>

        )
    }
}

const mapStateToProps=(state)=>{
       
  return{
  citi:state.citi
  }

}
// This component dispatch an action to store
const mapDispatchToProps = (dispatch) => {
return bindActionCreators({ exchangeRate}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) (Calculator)
