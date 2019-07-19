import axios from 'axios'

const URLContacts = 'https://vista-b26dc.firebaseio.com/contacts.json'
const URLBanxico = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno?token=68d4696107a6e45d2082556b4c6d58b2a3fbda80b7a30d5a8c3fb9187b3bae57'
const URLUser = 'https://citi-b914c.firebaseio.com/user.json'

export const allContactsList = () => {
  const request = axios.get(`${URLContacts}`)
    .then(res => res.data)
  return {
    type: 'GET_CONTACTS_ALL',
    payload: request
  }
}

export const exchangeRate = () => {
  const request = axios.get(`${URLBanxico}`)
    .then(res => res.data)
  return {
    type: 'GET_EXCHANGE',
    payload: request
  }
}
export const userInformation = () => {
  const request = axios.get(`${URLUser}`)
    .then(res => res.data)
  return {
    type: 'GET_USER',
    payload: request
  }
}
