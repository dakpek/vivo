import React, { Component } from 'react';
import * as firebase from 'firebase';
import './signup3.css'

export default class SignUp3 extends Component {

    render() {
        return (
            <div className="signUp3">
                <form className="signup3-form" onSubmit={this.props.writeData}>
                    <div className="type" id="regular" onClick={this.props.handleType}>
                        normal kanama
                    </div>
                    <div className="type" id="extra" onClick={this.props.handleType}>
                        extra kanama
                    </div>
                    <button                                      
                        type='submit'
                        className="signUp3-submit">
                        sign up
                    </button>
                </form>
            </div>
        )
    }
}