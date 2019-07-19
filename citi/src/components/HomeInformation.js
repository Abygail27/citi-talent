import React from 'react'
import './HomeInformation.css'
import { Link } from 'react-router-dom'

const HomeInformation = (props) => {
  return (
   <>
     <p className='center header_home'>Enviar información de contacto</p>
     <div class='row'>
       <form class='col s12'>
         <div class='row'>

           <div class='input-field col s10 offset-s1'>
             <input className='input_home' id='input_text' type='text' data-length='10' placeholder='Buscar nombre de contacto' />

           </div>
         </div>
       </form>
     </div>

     <div className='container_cards'>

       {props.contacts && props.contacts.length > 0
         ? props.contacts.map(item => (
           <Link to='/calculator'>
             <div class='row'>
               <div class='col s12 m5'>
                 <div class='card-panel card-contacts white'>
                   <img className='img_style'src={item.image} />
                   <span class='black-text contact_name'>{item.name}
                   </span>
                   <p class='contact_phone'>{item.contact.phone}
                   </p>
                 </div>
               </div>
             </div></Link>

         )) : null
       }

     </div></>
  )
}

export default HomeInformation
