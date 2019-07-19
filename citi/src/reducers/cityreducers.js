export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_CONTACTS_ALL':
      return { ...state, contactsList: action.payload }
    case 'GET_EXCHANGE' :
      return { ...state, exchange: action.payload }
    case 'GET_USER':
      return { ...state, userInformation: action.payload }
    default:
      return state
  }
}
