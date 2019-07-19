
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {allContactsList} from '../actions'
import { bindActionCreators } from 'redux'
import HomeInformation from '../components/HomeInformation'
import '../index.css'

class Home extends Component {

  componentWillMount =()=>{
    this.props.allContactsList()
  }
  render(){
    console.log(this.props)
        return (
            <div className="background-contacts">
               
                 <HomeInformation contacts={this.props.citi.contactsList}/>
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
return bindActionCreators({ allContactsList}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) ( Home)