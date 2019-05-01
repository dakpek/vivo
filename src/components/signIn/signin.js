import React, { Component } from 'react';
import './signin.css'

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';



const SignInPage = () => (
    <div>
        <SignIn />
    </div>
)
class SignInBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }



    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = this.state;
        this.props.firebase.doSignInWithEmailAndPassword(email, password)
            .then(res => {
                // LOADER
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }



    render() {

        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';


        return (

            <div className="signIn-modal">
                <form className="signIn-form" onSubmit={this.handleSubmit}>
                    <div className="signIn-hello">hosgeldiniz</div> 
                    <input
                        className={"signIn-input"}
                        value={email}
                        type='email'
                        name='email'
                        onChange={this.handleChange}
                        placeholder='email'/>
                        <br/>
                    <input
                        className={"signIn-input"}
                        value={password}
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        placeholder='sifre'/>
                        <br/>
                        <button
                        disabled={isInvalid}                                      
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

const SignIn = compose(
    withRouter,
    withFirebase,
    )(SignInBase);


export default SignInPage;