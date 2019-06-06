import React, { Component } from 'react';
import './charity.css'
import Navbar from '../navbar'
import Footer from '../footer'
import { 
    kamer, 
    morcati, 
    acev, 
    rose,
    gogh,
    rumi, 
    teresa, 
    angelou, 
    roosevelt 
} from '../../../assets'
import Carousel from 'react-flex-carousel';


export default class Charity extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            none: true,
            morcati: false,
            acev: false,
            kamer: false
        }
    }

    toggleMorcati = async () => {
        await this.setState({
            morcati: !this.state.morcati,
            acev: false,
            kamer: false,
            none: !this.state.none
        })

        if (this.state.morcati == true ) {
            this.setState({none: false})
        }

    }

    toggleAcev = async () => {
        await this.setState({
            acev: !this.state.acev,
            morcati: false,
            kamer: false,
            none: !this.state.none
        })

        if (this.state.acev == true ) {
            this.setState({none: false})
        }

    }

    toggleKamer = async () => {
        await this.setState({
            kamer: !this.state.kamer,
            acev: false,
            morcati: false,
            none: !this.state.none
        })

        if (this.state.kamer == true ) {
            this.setState({none: false})
        }

    }

    render() {
        return (
            <div className="charityContainer">
            <Navbar />
            <div className="charityMain">
                <div className="charity1">
                <img className="charityImg" alt="charityImg" src={rose} />
                <div className="charityBox">
                    <div className="charityHeaderBox"><div className="eight">8</div><div className="charityHeader">hepimizin</div></div>
                    <div className="charityWords">
                        Herbirimiz, her gun, onlarca lira harciyoruz. Harcamalarimizin da cogunlukla cok uluslu sirketlerin ceplerine gittigi bu carkta, tuketici olarak gucumuzun farkinda olmadan yapiyoruz harcamalarimizi.
                        Evet, herbirimiz kapitalizmden sikayet ediyoruz, ama farketmiyoruz ki bu sistemde aslinda bizim de bir gucumuz var. Gucumuz, harcadigimiz liralar, kuruslar. Ve belki bireyselde degil, ama toplumsal boyutta gucluyuz kizim!
                        <b>Dusunsene, Turkiye'de adet doneminde 30 milyonu askin kadiniz biz. Hepimiz her ay 1 lira atsak, her ay 30 milyon liralik iyiligiz, guzelligiz biz. </b>
                    </div>
                    <div className="charityWords">
                        Bu farkindalik, 8kadin'in arkasinda yatan felsefe. Evet biz de bu carkda bir girisimiz, ve bizim de para kazanmamiz gerekiyor. Ama biz bu girisimi, marka degerimizi, bu bilincten almak uzere kurulduk.
                        Bizim markamiz, hepimizin toplumsal gucunun bilinci. Ve bu toplulugu bir araya getirdigimizdeki gucumuz.
                    </div>
                    <div className="charityWords">
                        Bizden aldigin her urunden yaptigimiz karin %8i, Turkiye'de kadinin yerini yuceltmeye calisan bir kuruma gidiyor. Her ay bagis yaptigimiz kurumdan belge alip, bunu da sitemize koyacagiz. Hala inanmiyorsan, bir tik uzagindayiz. Gel ofisimize, sana hesap kitabimizi gostermekten cekinmeyiz.
                        Atalarimizin dedigi gibi, damlaya damlaya bir gol kurma hayalindeyiz ki, etrafinda cicekler yesersin.
                    </div>
                    <div className="charityWords" id="last">
                        Golumuze %8 de sen atmazmisin?
                    </div> 
                </div>
                </div>
                <div className="charity2">
                    <div id="sto" className="charityHeader">Desteginiz nereye gidiyor?</div>
                    <div className="charitySelector">
                        <div id="morcati" onClick={this.toggleMorcati} 
                        className={
                            this.state.morcati 
                            ? "charityButtonActive"
                            : "charityButton"
                        }>
                            <img className="charityButImg" alt="charityButImg" src={morcati} />
                        </div>
                        <div id="acev" onClick={this.toggleAcev} 
                        className={
                            this.state.acev 
                            ? "charityButtonActive"
                            : "charityButton"
                        }>
                            <img className="charityButImg" alt="charityButImg" src={acev} />
                        </div>
                        <div id="kamer" onClick={this.toggleKamer} 
                        className={
                            this.state.kamer 
                            ? "charityButtonActive"
                            : "charityButton"
                        }>
                            <img className="charityButImg" alt="charityButImg" src={kamer} />
                        </div>
                    </div>
                    <div className="charityExplanation">
                        {this.state.none ? <div id="zero" className="charityExp">Dernekler hakkinda daha fazla ogrenmek icin uzerlerine tiklayiniz.</div> :null}
                        {this.state.acev 
                        ?  <div className="charityExp">
                                <div className="charityWords">
                                Biz AÇEV olarak 25 yıldır, erken yaştaki her çocuğun güvende, sağlıklı, mutlu ve öğreniyor olması için çalışıyoruz. Ülkenin dört bir yanındaki ihtiyaç sahibi çocuklar, anne babalar ve genç kadınlar için bilimsel temelli eğitim programları geliştiriyor ve uyguluyoruz.
                                </div>
                                <div className="charityWords">
                                Eğitim programları ve saha çalışmalarının yanı sıra, toplumsal farkındalığı artırmak, bilinç ve destek oluşturmak üzere farkındalık ve savunu faaliyetleri gerçekleştiriyoruz.
                                </div>
                                <div className="charityWords">
                                Birleşmiş Milletler Sürdürülebilir Kalkınma Hedefleri çerçevesinde de özellikle vurgu yapılan, erken çocukluk döneminde nitelikli eğitim, gelecek nesillerin yetiştirilmesinde ailelerin rolü, toplumsal cinsiyet eşitliği ve yaşam boyu öğrenme konularına tüm faaliyetlerimizin odağında yer veriyoruz.
                                </div>
                                <div className="charityWords">
                                Bugüne kadar eğitimlerimizle ulaştığımız katılımcılarımız, gönüllü eğitimcilerimiz, bağışçılarmız ve giderek güçlenen işbirliği ağımızla her geçen gün daha da büyüyoruz.
                                </div>
                                <div className="charityWords">
                                Sağlam bir geleceğin temelinin yaşamın ilk 6 yılında atıldığını biliyor, çocukların geleceğini inşa etmeye 0’dan başlıyoruz…
                                </div>
                            </div>
                        : null
                        }
                        { this.state.kamer 
                            ? <div className="charityExp">
                                <div className="charityWords">
                                Biz yaşadığımız şiddeti ve geleneksel statümüzü fark etmiş, sorgulamak ve değiştirmek üzere harekete geçmiş kadınlarız. Ezberi bozmak ve rollerimizi yeniden tanımlamak için farkındalıklarımızı diğer kadınlarla paylaşıyoruz.
                                </div>
                                <div className="charityWords">
                                Diyarbakır ve yakın çevresine hizmet vermek üzere kurulmuş olan KAMER, bölgede yaşayan kadınlardan gelen talep üzerine, 2000 yılı içinde “Kadının İnsan Hakları İçin Bölgesel Yayılma Projesi”ni başlattı. Pilot proje olarak başlayan ”Bölgesel Yayılma Projesi” bilgi ve deneyimlerin paylaşılarak yaygın bir örgütlenme çalışması için gerekli metodu geliştirmemizi sağladı.
                                </div>
                                <div className="charityWords">
                                Bunun üzerine 2004 yılında Güneydoğu ve Doğu Anadolu Bölgelerindeki 23 ilin her birinde “Kadının İnsan Hakları” için çalışan birer kadın merkezi kurulması hedefiyle “Her Kadın İçin Bir Fırsat projesi” planlandı.
                                </div>
                                <div className="charityWords">
                                Güneydoğu ve Doğu Anadolu Bölgelerindeki 23 ilde ve ilçelerinde kadına yönelik şiddetle mücadele alanındaki çalışmalarımız sürdürülmektedir.
                                </div>
                                <div className="charityWords">
                                <b>Amacimiz, </b> cinsiyetçi değerlerin biçimlendirdiği kültür ve geleneklerin kadın ve çocuklara zarar veren uygulamalarını tespit etmek, alternatiflerini geliştirmek ve uygulanabilir olmalarını sağlamak.
                                </div>
                            </div>
                            : null
                        }
                        {this.state.morcati
                            ? <div className="charityExp">
                                <div className="charityWords">
                                Mor Çatı kurulduğundan bu yana şiddetten uzaklaşmak isteyen kadınlara dayanışma merkezi aracılığıyla destek sağlıyor. Erkek şiddetiyle mücadelede sığınaklar kadar önemli olan dayanışma merkezinde yapılan çalışmanın temelini, her bir kadının kendi ihtiyacına ve potansiyeline göre planlanan destekler oluşturuyor. Kadınların sığınak dışında kullanabileceği sosyal, hukuki, 
                                psikolojik mekanizmalarla da kendi güçlerini ortaya çıkarıp şiddetten uzak hayatlar kurabilecekleri 1990’dan bu yana Mor Çatı Dayanışma Merkezi’nde deneyimlenirken kadınların güçlenmelerinin önündeki engelleri; sosyal yapılardaki cinsiyetçi, ayrımcı, sosyal adaletten uzak mekanizmaları ve yaklaşımları ortaya çıkarıp değişime katkıda bulunuluyor.
                                </div>
                            </div>
                            : null 
                        
                        }
                    </div>
                </div>
                <div className="charity3">
                <Carousel autoPlayInterval={5000} switcher={false} >
	                <div className="charityQuote">
                        <div className="charityQuoteBox">
                            <div className="charityQuoteWord">&ldquo; Başkasının bulutunda bir gokkusagi ol &rdquo;</div>
                            <div className="charityQuoteAuthor">-Maya Angelou</div>
                        </div>
                        <img className="charityQuoteImg" alt="charityQuoteImg" src={angelou} />
                    </div>
	                <div className="charityQuote">
                        <div className="charityQuoteBox">
                            <div className="charityQuoteWord">&ldquo; Buyuk isler, pesi pesine gelen kucuk islerle yapilir &rdquo;</div>
                            <div className="charityQuoteAuthor">-Vincent Van Gogh</div>
                        </div>
                        <img className="charityQuoteImg" alt="charityQuoteImg" src={gogh} />
                    </div>
	                <div className="charityQuote">
                        <div className="charityQuoteBox">
                            <div className="charityQuoteWord">&ldquo; Karanliga kufretmektense, bir mum yak &rdquo;</div>
                            <div className="charityQuoteAuthor">-Elanor Roosevelt</div>
                        </div>
                        <img className="charityQuoteImg" alt="charityQuoteImg" src={roosevelt} />
                    </div>
	                <div className="charityQuote">
                        <div className="charityQuoteBox">
                            <div className="charityQuoteWord">&ldquo; Ağac isteyen, tohum eker! &rdquo;</div>
                            <div className="charityQuoteAuthor">-Mevlana</div>
                        </div>
                        <img className="charityQuoteImg" alt="charityQuoteImg" src={rumi} />
                    </div>
                </Carousel>
                </div>

            </div>
            <Footer />
            </div>
        )
    }

}