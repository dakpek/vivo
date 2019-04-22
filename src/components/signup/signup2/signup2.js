import React, { Component } from 'react';
import * as firebase from 'firebase';
import './signup2.css'

export default class SignUp2 extends Component {
    
    render() {

            return (
                <div className="signUp2">
                <div className="signUp-hello2">tanisalim mi firuze?</div>
                <form className="signUp2-form" onSubmit={this.props.writeData}>
                    <input
                        className={"signUp2-input"}
                        type='string'
                        name='firstName'
                        onChange={this.props.handleChange}
                        placeholder='Adin'/>
                        <br/>
                    <input
                        className={"signUp2-input"}
                        type='string'
                        name='lastName'
                        onChange={this.props.handleChange}
                        placeholder='Soyadin'/>
                        <br/>
                    <input
                        className={"signUp2-input"}
                        type='date'
                        name='birthday'
                        onChange={this.props.handleChange}
                        placeholder='Dogum Gunun'/>
                        <br/>
                    <input
                        className={"signUp2-input"}
                        type='number'
                        name='phoneNumber'
                        onChange={this.props.handleChange}
                        placeholder='Telefon Numaran'/>
                        <br/>
                        <button                                      
                        type='submit'
                        className="signUp2-submit">
                        Devam
                        </button>
                        {/* <Link to='/contact' className='forgot'>forgot my credentials</Link> */}
                </form>
            </div>
            )
    }
}