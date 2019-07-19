import React from 'react'
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
      <article id='button-container'>
        <button className='btn-floating btn-large waves-effect waves-light' />
        <button className='btn-floating btn-large waves-effect waves-light' />
        <button className='btn-floating btn-large waves-effect waves-light' />
        <button className='btn-floating btn-large waves-effect waves-light' />
      </article>

      {props.users && props.users.length > 0
        ? props.users.map(item => (
          <section id='container-mov'>
            <h6 id='mov'>Movimientos</h6>
            <div id='container-history'>
              <div id='id1'>
                <h6>{item.history.history1.sendto}</h6>
                <span> {item.history.history1.day}</span>
                <span>${item.history.history1.amount}</span>
              </div>
              <div>
                <h6>{item.history.history2.sendto}</h6>
                <span> {item.history.history2.day}</span>
                <span>${item.history.history2.amount}</span>
              </div>
            </div>
          </section>

        )) : null
      }

    </div>
  )
}

export default HistoryInformation
