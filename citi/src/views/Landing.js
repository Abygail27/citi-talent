import React, { Component } from 'react'
import Login from './Login';

import '../views/landing.css'

class Landing extends Component {
  render () {
    return (<>

      <div className = "container">
     
                    
                        <div className = "header_image"
                        style = {{
                          background:  `url(${logo})`,
                        }}
                        ></div>
             

       <Login/>
      </div></>
    )
  }
}

export default Landing
