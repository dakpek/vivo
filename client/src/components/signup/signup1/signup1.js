import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUpAction } from '../../../redux/actions/actionCreators'
import './signup1.css'

class SignUp1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: ""
        }

        
    }

    validate = (email, password) => {

        return {
          email: email.length === 0,
          password: password.length === 0,
        };
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, password } = this.state;
        this.props.signUpAction(email, password)
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

        render() {

        const blank = this.validate(this.state.email, this.state.password);         // check to see if email or password is blank
        const isEnabled = !Object.keys(blank).some(x => blank[x]);                  // will disable button if so
        let error = false;

        if (this.props.user.error) {
            error = this.props.user.error;
        }

        return (
            <div className="signUp1">
                <form className="signUp1-form" onSubmit={this.handleSubmit}>  
                {error == 101 ? <p className='signUp1-error'>bu email kullanilmaktadir</p> : null}
                    <input
                        className="signUp1-input"
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='emailin'/>
                        <br/>
                    <input
                        className="signUp1-input"
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        placeholder='sifre sec'/>
                        <br/>
                        <button
                        disabled={!isEnabled}                                      
                        type='submit'
                        className={blank.email
                            ? "signUp1-submit-disabled"
                            : blank.password
                              ? "signUp1-submit-disabled"
                              : "signUp1-submit"}>
                        Uyelik Olustur
                        </button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({ user }) => {
    return { user }
  }
  
  
  
  export default connect(mapStateToProps, { signUpAction })(SignUp1)

// Error caseler girilecek