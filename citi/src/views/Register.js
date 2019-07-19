import  React, { Component } from 'react'

class Register extends Component {
    componentDidMount () {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container"),
        {
           size:"invisible"
            // other options
        });
    }
    render() {
        return ( <div>

            onClick() {
                const phoneNumber = this.phone;
                const appVerifier = window.recaptchaVerifier;
                firebase
                .auth()
                .signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(confirmResult => {
                  // success
                })
                .catch(error => {
                  // error
                });
            
            }
        )
        </div>
    }
        
export default Register;