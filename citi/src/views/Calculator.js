
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {exchangeRate} from '../actions'
import { bindActionCreators } from 'redux'
import Transfer from '../components/Transfer'
import '../index.css'


class Calculator extends Component {
  componentWillMount =()=>{
    this.props.exchangeRate()
  }
  render(){
    console.log(this.props.citi.exchange)
        return (
          <div id='background-calculator' className='row'>
          <div id='name-logo'>
        <div className = "money-exchange"></div>
    
          </div>
           
            <article id='information-contact'>
            Envía hasta $500 dólares sin comisión.
            </article>

           <div className = "money-exchange">
             hoy, tipo de cambio:
             <img src = "https://vidatel.com.br/wp-content/uploads/2017/02/money-coin-or-button-with-dollar-sign-in-black-circle.png" width = "50px"></img>
           </div>

          <div className = "movements">
         <input className = "movement-us"type = "text" placeholder = "cantidad enviada"></input>
         <input className = "movement-mx"type = "text" placeholder = "cantidad recibida"></input>
          </div>
         
         <div className = "transfer">
        
           <button id = "send-transfer">Aceptar</button>
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