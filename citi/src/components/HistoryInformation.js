import React from 'react'


const HistoryInformation = (props) => {
  return (
    <div>

      {props.users && props.users.length > 0
        ? props.users.map(item => (
        
              <div> 
                {item.history.history1.day}
             </div>

          
        )) : null
      }

    </div>
  )
}

export default HistoryInformation
