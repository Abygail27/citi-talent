import axios from 'axios'

const URL = 'https://vista-b26dc.firebaseio.com/contacts.json'

export const allRestaurantsList = () => {
  const request = axios.get(`${URL}`)
    .then(res => res.data)
  return {
    type: 'GET_CONTACTS_ALL',
    payload: request
  }
}
