import React, { Component } from 'react';
import './landingpage.css';
import Navbar from '../navbar'
import {woman, recurring, charity, cotton} from '../../../assets'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className="landingContainer">
            <Navbar />
                <div className="landingBox">
                <div className="landingImage">
                <img alt="landingPic" className="landingImg1" src={woman} />
                </div>
                <div className="landingWords">
                    <div className="words" id="header">Guvenebilecegin aylik adet pedleri</div>
                    <div className="words" id="sub">
                    Dogru uretim, sana ozel paketleme, durust fiyatlama, kapina teslim.
                    </div>
                    <div className="tryme">Sen de dene</div>
                </div>
                </div>
                <div className="landingBox">
                    <div className="landingPointer">
                        <img alt="landingPointerImg" className="landingPointerImg"  src={cotton}/>
                        <div className="landingPointerWords">ISO 3000 standartli organik pamuk</div>
                    </div>
                    <div className="landingPointer">
                        <img alt="landingPointerImg" className="landingPointerImg"  src={recurring}/>
                        <div className="landingPointerWords">Aksatmasiz, her ay, adresine teslim</div>
                    </div>
                    <div className="landingPointer">
                        <img alt="landingPointerImg" className="landingPointerImg"  src={charity} />
                        <div className="landingPointerWords">Her paket ucretinden dost kurumlarimiza bagis</div>
                    </div>
                </div>
            </div>
        )
    }
}