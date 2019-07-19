import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC10g636OXjQJq2achDkmJOF77PHAHbpX0',
  authDomain: 'citi-b914c.firebaseapp.com',
  databaseURL: 'https://citi-b914c.firebaseio.com',
  projectId: 'citi-b914c',
  storageBucket: 'citi-b914c.appspot.com',
  messagingSenderId: '710884444178',
  appId: '1:710884444178:web:74b0ad4efc2fa11d'
}
  
const fireBase = firebase.initializeApp(firebaseConfig)

export default fireBase
