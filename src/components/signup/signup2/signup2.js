import React, { Component } from 'react';
import * as firebase from 'firebase';
import './signup2.css'

export default class SignUp2 extends Component {
    
    render() {

            return (
                <div className="signUp2">
                <div className="signUp2-hello">Tanisalim o zaman :)</div>
                <div className="signUp2-hello2">Bize biraz kendinden bahsedermisin?</div>
                <form className="signUp2-form" onSubmit={this.props.writeData}>
                <div className="signUp-inputExplanation">Isim</div>
                    <input
                        className={"signUp2-input"}
                        type='string'
                        name='firstName'
                        onChange={this.props.handleChange}
                        placeholder='Sabiha'/>
                        <br/>
                    <div className="signUp-inputExplanation">Soyisim</div>
                    <input
                        className={"signUp2-input"}
                        type='string'
                        name='lastName'
                        onChange={this.props.handleChange}
                        placeholder='Gokcen'/>
                        <br/>
                    <div className="signUp-inputExplanation">Dogum Tarihin</div>
                    <input
                        className={"signUp2-input"}
                        type='date'
                        name='birthday'
                        onChange={this.props.handleChange}
                        placeholder='Dogum Gunun'/>
                        <br/>
                    <div className="signUp-inputExplanation">Telefon Numaran</div>
                    <input
                        className={"signUp2-input"}
                        type='number'
                        name='phoneNumber'
                        onChange={this.props.handleChange}
                        placeholder='053X-XXX-XXXX'/>
                        <br/>
                        <div className="signUpFormButtons">
                            <button
                            onClick={this.props.pageBackward}                                     
                            className="signUp2-goBack">
                            Geri Git
                            </button>
                            <button                                      
                            type='submit'
                            className="signUp2-submit">
                            Devam
                            </button>
                        </div>
                        
                </form>
            </div>
            )
    }
}

// Error Caseler bakilacak
// Phone number entry icin npm package vs. bakilacak