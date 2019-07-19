
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {allContactsList} from '../actions'
import { bindActionCreators } from 'redux'


class Home extends Component {
  componentWillMount =()=>{
    this.props.allContactsList()
  }
  render(){
    console.log(this.props)
        return (
            <div className="">
               
                 <div>Hola</div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
       
  return{
  contacts:state.contacts
  }

}
// This component dispatch an action to store
const mapDispatchToProps = (dispatch) => {
return bindActionCreators({ allContactsList}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) ( Home)