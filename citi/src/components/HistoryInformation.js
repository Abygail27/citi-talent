import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const HistoryInformation = (props) => {
  return (
    <div>
      <article id='target-container'>
        <div>
          <h6 id='name-luis'>Hola, Luis</h6>
          <p id='saldo'>Saldo Citi Contigo</p>
          <h5 id='count'>$ 1200.00</h5>
        </div>
        <div id='img-target' />
      </article>
      <div id='button-container'>
        <article >
          <button className='btn-floating btn-large waves-effect waves-light envio'><NavLink className='grey-text text-darken-4 font-nav' to='/calculator' /></button>
          <button className='btn-floating btn-large waves-effect waves-light pagos' />
          <button className='btn-floating btn-large waves-effect waves-light ahorro' />
          <button className='btn-floating btn-large waves-effect waves-light tarjeta' />
          <div id='button-link'>
            <span>Envíos</span>
            <span>Pagos</span>
            <span>Ahorro</span>
            <span>Tarjeta</span>
          </div>
        </article>
      </div>

      {props.users && props.users.length > 0
        ? props.users.map(item => (
          <section id='container-mov'>
            <h6 id='mov'><strong>Movimientos</strong></h6>
            <div id='container-history'>
              <div id='id1'>
                <h6>{item.history.history1.sendto}</h6>
                <span> Fecha: {item.history.history1.day}</span>
                <span>Monto: ${item.history.history1.amount}</span>
              </div>
              <div>
                <h6>{item.history.history2.sendto}</h6>
                <span> Fecha: {item.history.history2.day}  </span>
                <span> Monto: ${item.history.history2.amount}</span>
              </div>
              <div>
                <h6>{item.history.history3.sendto}</h6>
                <span> Fecha: {item.history.history3.day}  </span>
                <span> Monto: ${item.history.history3.amount}</span>
              </div>
              <div>
                <h6>{item.history.history4.sendto}</h6>
                <span> Fecha: {item.history.history4.day}  </span>
                <span> Monto: ${item.history.history4.amount}</span>
              </div>
              <div>
                <h6>{item.history.history5.sendto}</h6>
                <span> Fecha: {item.history.history5.day}  </span>
                <span> Monto: ${item.history.history5.amount}</span>
              </div>
              <div>
                <h6>{item.history.history6.sendto}</h6>
                <span> Fecha: {item.history.history6.day}  </span>
                <span> Monto: ${item.history.history6.amount}</span>
              </div>
            </div>

          </section>

        )) : null
      }

    </div>
  )
}

export default HistoryInformation
