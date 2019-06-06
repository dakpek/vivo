import React, { Component } from 'react';
import './profile.css';

import SideMenu from '../../menu'
import { withRouter } from 'react-router-dom';


export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {},
        }
    }



    render() {
        return (
            <div className="profileSettingsContainer">
               <SideMenu 
               uid={this.props.uid}
               />
                <div className="profileSettingsHeader">Profil Bilgilerim</div>
                <div className="profileSettingsBody">
                    <form className="signUp2-form" onSubmit={this.props.writeData}>
                    <div className="profilePartOne">
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
                    </div>
                    <div className="profilePartTwo">
                    <div className="signUp4-inputExplanation">Adres</div>
                    <div className="signUp4-address">
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
                    </div>
                    <div className="signUp4-inputExplanation">
                    Ayin kacinci gununde postani almak istersin?
                    </div>                   
                    <input
                        className={"signUp4-inputDayBy"}
                        type='number'
                        name='packageBy'
                        value={this.state.packageBy}
                        onChange={this.handleChange}
                        placeholder='ornek: 7'/>
                        <br/>
                            <button                                      
                            type='submit'
                            className="signUp4-submit">
                            Odemeye Gec
                            </button>
                            <button
                            onClick={this.props.pageBackward}                                     
                            className="signUp4-goBack">
                            Geri Git
                            </button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}


//firebase stuff


