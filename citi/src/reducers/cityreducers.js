export default function (state = {}, action) {
    switch (action.type) {
      case 'GET_CONTACTS_ALL':
        return { ...state, contactsList: action.payload }
      default:
        return state
    }
  }