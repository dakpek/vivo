import React, { Component } from 'react';
import * as firebase from 'firebase';
import './signup4.css'

export default class SignUp4 extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            address2: '',
            city: '',
            country: 'Turkiye',
            county: '',
            zipCode: '',
            packageBy: '',
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }


    writeData = (event) => {
        event.preventDefault()
        let state = Object.assign({}, this.props.state)
        let packageBy = this.state.packageBy
        let addressTemp = this.state.address + ' / ' + this.state.address2;
        let address = Object.assign({}, this.state);
        delete address.address2;
        delete address.packageBy
        address.address = addressTemp
        let uid = state.uid
        delete state.password;
        delete state.uid;
        delete state.error;
        delete state.page;
        let data = {...state, address, packageBy}
        firebase.database().ref('users/' + uid).set(data)
        .then(() => {
            this.props.pageForward()
        })
    }

    render() {
            return (
                <div className="signUp4">
                <div className="signUp-hello2">son olarak, nereye ve ne zaman yollayacagimizi bilelim</div>
                <form className="signUp4-form" onSubmit={this.writeData}>
                    <input
                        className={"signUp4-input"}
                        type='string'
                        value={this.state.address}
                        name='address'
                        onChange={this.handleChange}
                        placeholder='Adres 1'/>
                        <br/>
                    <input
                        className={"signUp4-input"}
                        type='string'
                        value={this.state.address2}
                        name='address2'
                        onChange={this.handleChange}
                        placeholder='Adres 2'/>
                        <br/>
                    <input
                        className={"signUp4-input"}
                        type='string'
                        value={this.state.county}
                        name='county'
                        onChange={this.handleChange}
                        placeholder='Ilce'/>
                        <br/>
                    <input
                        className={"signUp4-input"}
                        type='string'
                        value={this.state.city}
                        name='city'
                        onChange={this.handleChange}
                        placeholder='Il'/>
                        <br/>
                    <input
                        className={"signUp4-input"}
                        type='number'
                        value={this.state.zipCode}
                        name='zipCode'
                        onChange={this.handleChange}
                        placeholder='Post Kodu'/>
                        <br/>
                    <div className="signUp-dayBy">
                    Ayin kacinci gununde postani almak istersin?
                    </div>                   
                    <input
                        className={"signUp4-input"}
                        type='number'
                        name='packageBy'
                        value={this.state.packageBy}
                        onChange={this.handleChange}
                        placeholder='ornek: 7'/>
                        <br/>
                        <button                                      
                        type='submit'
                        className="signUp2-submit">
                        Odemeye Gec
                        </button>
                      
                </form>
            </div>
            )
        }
}