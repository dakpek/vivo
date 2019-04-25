import React, { Component } from 'react';
import './signin.css'
import * as firebase from 'firebase';


export default class SignInModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('tis starting')
        let {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log('hello: ', res)
        })
        .catch((err) => {
            console.log(err)
          });
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    render() {
        return (

            <div className="signIn-modal">
                <form className="signIn-form" onSubmit={this.handleSubmit}>
                    <div className="signIn-hello">hosgeldiniz</div> 
                    <input
                        className={"signIn-input"}
                        value={this.state.email}
                        type='email'
                        name='email'
                        onChange={this.handleChange}
                        placeholder='email'/>
                        <br/>
                    <input
                        className={"signIn-input"}
                        value={this.state.password}
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        placeholder='sifre'/>
                        <br/>
                        <button                                      
                        type='submit'
                        className="sign-in-submit">
                        giris yap
                        </button>
                        {/* <Link to='/contact' className='forgot'>forgot my credentials</Link> */}
                </form>
            </div>

        )
    }
}