import React from 'react'


const HomeInformation = (props) => {
  return (
    <div>

      {props.contacts && props.contacts.length > 0
        ? props.contacts.map(item => (
        
              <div> 
                {item.name}
             </div>

          
        )) : null
      }

    </div>
  )
}

export default HomeInformation