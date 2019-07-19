import React, { Component } from 'react'
import Login from './Login';
import citibanamex from './assets/images/citibanamex.jpg'
import '../views/landing.css'

class Landing extends Component {
  render () {
    return (<>

      <div className = "container">
     
                        <div className=" header_logo center">Citi</div>
                        <div className="header_logo_title">contigo</div>
                        <div className = "header_image"
                        style = {{
                          background:  `url(${citibanamex})`,
                        }}
                        ></div>
             

       <Login/>
      </div></>
    )
  }
}

export default Landing
