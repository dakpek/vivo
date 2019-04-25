import React, { Component } from 'react';
import './contact.css';
import SideMenu from '../menu'
import { heart } from '../../assets'

export default class Contact extends Component {

    render() {
        return (
            <div className="contactContainer">
                <SideMenu />
                <div className="contactBody">
                <div className="contactHeader">
                Istedigin zaman, burdayiz
                </div>
                <img src={heart} className="contactImage" />
                <div className="contactWords">
                    <div className="contactRow">
                    <div className="contactCol"><b>telefon</b></div>
                    <div className="contactCol"><b>|</b></div>
                    <div className="contactCol">+90 (538) 295 99 45</div>
                    </div>
                    <div className="contactRow">
                    <div className="contactCol"><b>email</b></div>
                    <div className="contactCol"><b>|</b></div>
                    <div className="contactCol">hello@viva.ped</div>
                    </div>
                </div>
                    <div className="contactFooter">Viva Inc.</div>
                </div>
            </div>
        )
    }
}