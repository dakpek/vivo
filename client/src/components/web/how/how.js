import React, { Component } from 'react';
import Navbar from '../navbar'
import './how.css'
import Footer from '../footer'

import { how0, how1, how2, how3, how4, howBackground } from '../../../assets/'

export default class How extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="howContainer">
                <Navbar/>
                <div className="howMain">
                    <div className="howMainWords">
                    <div className="howMainHeader">Sizin pediniz, size ozel</div>
                    <div className="howMainSub">Biz sadece istedigin kalite standardini biliyoruz, 
                    onun disinda adet donemin sadece sana ozel. Ve TAO senin markan.
                    </div>
                    </div>
                    <img alt="howMainImg" className="howMainImg" src={how0} />
                </div>
                <div className="howLearnMore">+ Daha Fazla Ogren</div>
                <div className="howHeader">
                    <img alt="howBackground" className="howBackground" src={howBackground} />
                    <div className="howHeaderWords">Nasil Calisir?</div>
                </div>
                <div className="howBox">
                    <div className="howWords">
                        <div className="howStep">1. Adim</div>
                        <div className="howBoxHeader">Sana uygun paketi sec</div>
                        <div className="howExplanation">
                            Herkesin regl donemi farkli gecer. Senin regl donemine ozel bir paket hazirlayalim,
                            hem tam ihtiyacin olan pedler elinin altinda olsun, hem de gerektiginden fazla odeme.
                        </div>
                    </div>
                    <img alt="howImage" className="howImage" src={how1}></img>
                </div>
                <div className="howBox">
                <img alt="howImage" className="howImage" src={how2}></img>
                    <div className="howWords">
                        <div className="howStep">2. Adim</div>
                        <div className="howBoxHeader">Paketini hemen yollayalim</div>
                        <div className="howExplanation">
                        Ac, bak, tak, dene! Eger pedlerimizi begenirsen, baska birsey yapmana gerek yok, biz gerisini halledicez.
                        Icerikleri uygun gelmedi mi? Dert degil, sitemize gel, paketini degistir.
                        </div>
                    </div>
                </div>
                <div className="howBox">
                <div className="howWords">
                        <div className="howStep">3. Adim</div>
                        <div className="howBoxHeader">Paketin her ay basi seni karsilayacak</div>
                        <div className="howExplanation">
                            Bundan boyle bizi arka plana atabilirsin. Her ay basinda yeni paketini evine yollayacagiz. <br/>
                            <div className="howStock">(Sana yolladigimiz deneme paketi de, beklenmedik durumlara karsi tampon gorevini ustlenecek ;)</div>
                        </div>
                    </div>
                     <img alt="howImage" className="howImage" src={how3}></img>
                </div>
                <div id="final" className="howBox">
                     <img alt="howImage" className="howImage" src={how4}></img>
                    <div className="howWords">
                        <div className="howStep">4. Adim</div>
                        <div className="howBoxHeader">Istedigin zaman paket atla, adres degistir, iptal et</div>
                        <div className="howExplanation">
                            Sen mutlu kaldikca biz variz. Diger sitelere benzemeyiz; bizi iptal etmen bile cok kolay. 
                            Zorla guzellik olmaz :)
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}