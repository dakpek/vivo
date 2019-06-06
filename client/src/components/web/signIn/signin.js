import React, { Component } from 'react';
import './signin.css'
import { cottonPic } from '../../../assets'
import { connect } from 'react-redux'
import { signInAction, getUserAction } from '../../../redux/actions/actionCreators'
import { withRouter } from 'react-router-dom';
import Navbar from '../navbar'
import Homepage from '../homepage'




 class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    validate = (email, password) => {

        return {
          email: email.length === 0,
          password: password.length === 0,
        };
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state;
        await this.props.signInAction(email, password)
        this.props.history.push('/profil')
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }



    render() {

        const { email, password } = this.state;
        const blank = this.validate(this.state.email, this.state.password);         // check to see if email or password is blank
        const isEnabled = !Object.keys(blank).some(x => blank[x]);                  // will disable button if so
        let error = false;

        if (this.props.user.error) {
            error = this.props.user.error;
        }


        return (

            <div className="signInComponent">
                <Navbar/>
                <img alt="signInImg" className="signInImg" src={cottonPic} />
                <div className="signInBox">
                <div className="signInForm">
                    <form className="signIn-form" >
                        <div className="signIn-hello">hosgeldiniz</div>
                        {error == 102 ? <p className='signUp1-error'>boyle bir kullanici bulunmamaktadir</p> : null}
                        {error == 103 ? <p className='signUp1-error'>hatali sifre girisi yaptiniz</p> : null}
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
                            onClick={this.handleSubmit}
                            disabled={!isEnabled}                                      
                            type='submit'
                            className={blank.email
                                ? "sign-in-submit-disabled"
                                : blank.password
                                  ? "sign-in-submit-disabled"
                                  : "sign-in-submit"}>
                            giris yap
                            </button>
                    </form>
                </div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = ({ user }) => {
    return { user }
  }
  
  
  
  export default connect(mapStateToProps, { signInAction, getUserAction })(withRouter(SignIn))