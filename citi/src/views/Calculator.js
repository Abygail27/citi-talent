
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {exchangeRate} from '../actions'
import { bindActionCreators } from 'redux'


class Calculator extends Component {
  componentWillMount =()=>{
    this.props.exchangeRate()
  }
  render(){
    console.log(this.props.citi.exchange)
        return (
            <div className="">
               
                 <div>hola</div>
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