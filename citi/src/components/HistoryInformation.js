import React from 'react'
import '../index.css'

const HistoryInformation = (props) => {
  return (
    <div>
    <article>
    </article>

      {props.users && props.users.length > 0
        ? props.users.map(item => (
        
<div>

                {item.history.history1.day}
                {item.history.history1.sendto}
                ${item.history.history1.amount}

             </div>

          
        )) : null
      }

    </div>
  )
}

export default HistoryInformation
