import React, { Component } from 'react';
import * as firebase from 'firebase';
import './signup1.css'

export default class SignUp1 extends Component {

        render() {

        return (
            <div className="signUp1">
                <div className="signUp-hello">Aramiza hosgeldin!</div>
                <div className="signUp-hello2">bize kendin hakkinda biraz bahsedermisin?</div>
                <form className="signUp1-form" onSubmit={this.props.createUser}>
                    <input
                        className={"signUp1-input"}
                        type='email'
                        name='email'
                        onChange={this.props.handleChange}
                        placeholder='emailin'/>
                        <br/>
                    <input
                        className={"signUp1-input"}
                        type='password'
                        name='password'
                        onChange={this.props.handleChange}
                        placeholder='sifre sec'/>
                        <br/>
                        <button                                      
                        type='submit'
                        className="signUp1-submit">
                        Uyelik Olustur
                        </button>
                </form>
            </div>
        )
    }
}