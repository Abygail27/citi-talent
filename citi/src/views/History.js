
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {userInformation} from '../actions'
import { bindActionCreators } from 'redux'
import HistoryInformation from '../components/HistoryInformation'

class History extends Component {
  componentWillMount =()=>{
    this.props.userInformation()
  }
  render(){
    console.log(this.props)
        return (
            <div className="">
               
                 <HistoryInformation users={this.props.citi.userInformation}/>
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
return bindActionCreators({ userInformation}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps) (History)