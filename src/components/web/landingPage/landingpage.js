import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import Navbar from '../navbar'
import { 
    cottonColor, 
    video, 
    one, 
    two, 
    three, 
    how5,
    lira,
    shipping,
    donation,
} from '../../../assets'

import Footer from '../footer'






export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playVideo: true
        }
    }

    playVideo = () => (
        
        <video autoPlay muted loop className="videoContainer">
          <source src={video} type="video/mp4" />
        </video>
    )


    render() {

        return (
            <div className="landingContainer">
            <Navbar />
                <div className="landingHeader">
                <div>
                {this.state.playVideo? this.playVideo() : null}
                </div>
                <div className="landingWords">
                    <div className="words" id="header">Guvenebilecegin aylik adet pedleri</div>
                    <div className="words" id="sub">
                    Dogru uretim, sana ozel paketleme, durust fiyatlama, kapina teslim.
                    </div>
                    <Link to='/paketsec' className="tryme">Sen de dene</Link>
                </div>
                </div>
                
                <div className="landingHow">
                    <img alt="landingHowImage" src={how5} className="landingHowImage" />
                    <div className="landingHowWords">
                        <div className="landingHowBox">
                            <img alt="landingHowNumber" className="landingHowNumber" src={one}/>
                            <div className="landingHowWord">
                            Bize kendinden bahset, organik pedlerimizle sana ozel bi deneme paketi yollayalim.
                            Tabiki de indirimli, sonucta daha followlasmadik bile 😉
                            </div>
                        </div>
                        <div className="landingHowBox">
                            <img alt="landingHowNumber" className="landingHowNumber" src={two}/>
                            <div className="landingHowWord">
                                Bizi sevdiysen, yaslan arkana keyfine bak. Paketlerin her ay kapida belirmeye devam edecek.
                                Arada ekstra bi'tane de yollayacagiz ki zor gunlerin icin yedek stogun bulunsun. 🤗
                            </div>
                        </div>
                        <div className="landingHowBox">
                            <img alt="landingHowNumber" className="landingHowNumber" src={three}/>
                            <div className="landingHowWord">
                                Istedigin ayi atlayabilir, istersen paketini, adresini degistirebilirsin. 
                                Baktin olmuyor, istedigin anda da cekip gidebilirsin. Senin mutlulugun icin feda olsun!😘
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landingPointerBox">
                    <div className="landingPointer">
                        <img alt="landingPointerImg" className="landingPointerImg"  src={cottonColor}/>
                        <div className="landingPointerWords">ISO 3000 standartli organik pamuk</div>
                    </div>
                    <div className="landingPointer">
                        <img alt="landingPointerImg" className="landingPointerImg"  src={shipping}/>
                        <div className="landingPointerWords">Bedava kargo ucreti</div>
                    </div>
                    <div className="landingPointer">
                        <img alt="landingPointerImg" className="landingPointerImg"  src={lira} />
                        <div className="landingPointerWords">Sana ozel paket, ekonomik fiyat</div>
                    </div>
                </div>

                <div className="landingBox">
                    <img alt="landingDonationImg" className="landingDonationImg" src={donation} />
                    <div className="landingDonationWords">
                        <div className="landingDonationHeader">Damlaya damlaya gol olur</div>
                        <div className="landingDonationWord">
                            Mutlu kadin, mutlu toplum demektir. Ancak ne yazikki Turkiye olarak cok mutsuzuz, 
                            cunku kadinlarimiz mutsuz. Bizden aldigin her ped icin toplumumuzda kadinin yerini yuceltmeye
                            yardim eden, onun mutlulugu icin ugrasan kuruluslara destek sagliyoruz - <b>felsefemiz; biz kazandikca hepberaber kazanalim.</b>
                        </div>
                        <i> ...ve bu daha baslangic, hele bize biraz zaman ver.</i>
                        <Link to="/bagis" className="landingDonationButton">Bagis Felsefemizi Oku</Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}