import React, { Component } from 'react';
import './profile.css';
import * as firebase from 'firebase'
import SideMenu from '../../menu'

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {},
            settingPage : 1,
        }
    }


    render() {
        return (
            <div className="profileSettingsContainer">
               <SideMenu 
               uid={this.props.uid}
               />
                <div className="profileSettingsHeader">Profil Bilgilerim</div>
                <div className="profileSettingsBody"></div>
            </div>
        )
    }
}