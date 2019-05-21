import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homescreen.css';
import logo from '../../assets/logo.png';
import SignIn from '../signIn'
import * as firebase from 'firebase'
import Mainpage from '../mainPage';
import { withFirebase } from '../Firebase';
import { withAuthentication } from '../Session'
import { withAuthorization } from '../Session'
// import Navbar from '../navbar';

class HomepageBase extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
          signIn: false,
          loading: false,
          uid: "",
          user: {},
        }
      }
    
    

    // opens the signIn modal
    openSignIn = () => {
        this.setState({signIn: !this.state.signIn})
    }

    fetchUser = () => {
        firebase.database().ref('/users/' + this.state.uid).once('value')
            .then((res) => {
                let user = res.val()
                user.firstName = this.nameConvert(user.firstName)
                user.lastName = this.nameConvert(user.lastName)
                this.setState({user, 'loading': false})
                console.log(this.state.user)       
            })
    }

    signOut = () => {
        firebase.auth.signOut().then(() =>{
            this.setState({uid: "", user: {}})
        })
        console.log(firebase.auth().currentUser)
    }

    // MOVE TO SIGN UP SECTION
    nameConvert = (name) => {
        let lowerName = name.toLowerCase();
        let firstLetter = name.substring(0,1)
        firstLetter = firstLetter.toUpperCase();
        let rest = name.substring(1,name.length)
        let res = firstLetter + rest;
        return res
    }


    render() {

        if (this.props.firebase.auth.currentUser) return <Mainpage />
        
        return (
            <div className="homepageContainer">
            {/* <Navbar /> */}
            <div className="SignInContainer">
            </div>
            <div className="homepageContainer">
            <div className="homepageHeader">
                <div className="headerTitle">Nedir?</div>
                <div className="headerTitle">Nasil Calisir?</div>
                <div className="headerTitle">Felsefemiz</div>
                <div className="headerTitle">Iletisim</div>
            </div>
            <div className="homepageEntrance">
                <img alt="logo" className="logo" src={logo} />
                <div className="homepageTagline">
                    <div>Turkiye'nin</div>
                    <div>Kadinlar Klubu</div>
                </div>
                <div className="homepageButtons">
                    <Link to="/uyeol" className="homepageSignup">Uye Ol</Link>
                    <Link to="/girisyap" className="homepageSignin">Giris Yap</Link>
                </div>
                
                </div>
            <div className="homepage" id="homepage1" >
                <div className="homepageWords">
                <div className="homepageTitle"><h2>DIKKAT: <br/> Yuksek Gerilim</h2></div>
                    <div className="homepageImages">

                    </div>
                    <div className="homepageParagraph">
                        <div className="homapagePoem">Teyzem geldi, anavatan kan agliyor;</div>
                        <div className="homapagePoem">salcali kofte bile diyeni duyduk. </div>
                        <div className="homapagePoem">Girgiri hos ama her ay basa bela,</div>
                        <div className="homapagePoem">Anliyoruz.</div>

                    </div>
                    <div className="homepageParagraph">
                        Nadide ulkemizin 1001 cesit derdi arasinda, bi de pedim bitti stresiyle mi ugrasilir abi? Reyonlarda
                        50 cesit paket arasinda cift integral alip hesap optimizasyonu mu yapilir? Dolastik Turkiye'yi,
                        bulduk duzgun bi ped ureticisi (hayir o pahalli ama plastik gibi olanlardan degil, sen anladin 😉), 
                        toptan alip ucuza aldik. Sonra da Viva kadinlar klubunu kurduk. Her ay ihtiyacin olan butun pedleri paketleyip tek seferde kapina, fazlasiyla yolluyoruz. 
                        Hem de marketteki fiyatlardan daha ucuza!
                    </div>
                    <div className="homepageParagraph">
                        Ekstra mi kaldi? Kalanlari bitince arkadasa verir gunu kurtarirsin. Bidahaki aya yenisi geliyo sana nas'olsa sekerim.
                    </div>
                    <div className="homepageImages">

                    </div>
          
                </div>
            </div>
            <div className="homepage" id="homepage2">
                <div className="homepageHowTitle"><h2>Viva nasil calisir?</h2></div>
                <div className="homepageHowBox">
                    <div className="col1">
                        <div className="row1">
                        <div>1.</div>
                        </div>
                        <div className="row2">
                        2.
                        </div>
                        <div className="row3">
                        3.
                        </div>
                        <div className="row4">
                        4.
                        </div>
                    </div>
                    <div className="col2">
                        <div className="row1">
                        <div className="homepageHow">
                        Sitemize uye ol, bilgilerini gir, bir gun sec, ve hosgeldin paketini ismarla! 
                        </div>
                        </div>
                        <div className="row2">
                        <div className="homepageHow">
                        Sectigin gunde hosgeldin paketin seni evinde karsilasin. 
                        </div>
                        </div>
                        <div className="row3">
                        <div className="homepageHow">
                        Bizden memnun kalirsan, baska birsey yapmana gerek yok.
                        Hey ay kredi kartindan abonelik ucreti duser, gununde paketini kapina yetistiririz.
                        </div>
                        </div>
                        <div className="row4">
                        <div className="homepageHow">
                        Baktin ki ayri dunyalarin insanlari olduk, siteye girip tek tusla bu iliskiye noktayi koyabilirsin. 
                        <span className="homepageHow-joke"> Hayir, degisebilirim ayaklari da yok, merak etme.</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="homepage" id="homepage3">
                <div className="homepageTitle"><h2>Hala sorularim var Nalan?!</h2></div>
                <div className="homepageWords">
                    <div className="homepageQ">Paket</div>
                    <div className="homepageQParagraph">
                        Aylik paketinin icinden, regl doneminde ihtiyacin olan butun gece, uzun ve normal pedler cikiyor.
                        Gereginden biraz da fazla dolduruyoruz ki, eksik kalmiyorsun.
                        Arada da ufak suprizlrer kacabiliyor icine.🤩
                    </div>
                    <div className="homepageQ">Pedlerimiz</div>
                    <div className="homepageQParagraph">
                        Bizde oyle sentetik, plastik pedlerden yok. Dogal urunlerle uretilen hijyenik ped bulmak icin cok didindik; bu konuda da kendimize cok guveniyoruz.
                        Toptan alip, aracilari cikardigimiz icin de kimi supermarket fiyatlarindan ucuza, kapina kadar getiriyoruz. Buyuzden iddialiyiz. Bizi begenmezsen, hemmencecik iade aliriz. 🤑
                    </div>
                    <div className="homepageQ">Stok</div>
                    <div className="homepageQParagraph">
                        Uyeligin basladiktan sonra, ilk kargonu duble yapicaz. Ekstra paket, stok paketin. kargonun gec kalmasi, veya o ay paketin sana yetmemesi durumlarinda devreye giricek. 
                        Arada bir de yenileyecegiz. Merak etme, hicbir zaman yanliz degilsin! 🥰
                    </div>
                </div>
            </div>
            <div className="homepagePhilosophy">
                <div className="homepageWords">
                <div className="homepageTitle"><h2>Cikis Felsefemiz ve Is modelimiz</h2></div>
                    <a>Sevgili dost,</a>
                    <a>
                        Viva ekibi olarak, Turk kadinlarini desteklemenin, Turkiye'yi desteklemek oldugunu dusunuyoruz.
                        Yola cikis amacimiz, bu guzel ulkede bir katma deger yaratmak, hepimiz icin birseyler ortaya cikarmak.
                        Yalan yok, bir hayir kurumu degiliz, ve ekip olarak gunun sonunda evlerimizee ekmek de goturmek icin para da kazanmak istiyoruz tabii ki de.
                        Ancak, bizim felsefemiz, bu topraklarda bir suredir unutulan bir dusunce. Iyi is yaparak, hepimizin kazanabilecegi.
                    </a>
                    <a>
                        Kadinlarimiz, sizin icin bir is yaratmayi sectik, cunku sizlerin bu toplumda ne kadar hor goruldugunuzun farkindayiz.
                        Dusunduk ki, hepimize, hayata can veren adetinizin bile daha toplumumuzda kabul gormedigi cepler var. Ne kadar aci, ne haksizlik! 
                        Sizin adet doneminiz hayatimizin devami, turk soyunun gelecegi. Bunun icin sizi utandirmaktansa, sizi onurlandirmaliyiz toplumca. 
                        Biz de, bu zorlu surecinizde size biraz olsun kolaylik saglamanin, anlamli bir is olacagini dusunduk. Ve yapmaya karar verdik.
                    </a>
                    <a>
                        Ayni zamanda, ekibin hepsi, 21. yy insani. Hepimiz internet cocuklariyiz, ve internete ozgu is modelleri kullanarak, 
                        hem size yansittigimiz fiyatta, hem de sizin tecrubenizde yenilikler getirebilecegimizi biliyoruz. Suanda piyasada araci supermarket zincirleri, ve yabanci sermaye sagolsun, 
                        burda uretilen urun hem size daha pahalliya geliyor, hem de odediginiz para Turkiye'mizde kalmiyor. Ustune bir de urune ulasim icin zahmet bedeli var.
                        Biz internetin sagladigi direct-to-consumer is modeli ile urunlerimizi markette bulabileceginiz kalitede, kullandiginiz pede gore benzer veya daha ucuz fiyata, ustelik kapiniza kadar getirtiriz.
                    </a>
                    <a>
                        Son olarak, ufak bir not; 21. yy bireyleri olarak, geri donusumun de farkindayiz, ve dongusel ekonomi prensiplerine inaniyoruz. Biz kazandikca, bizle beraber baskalarini
                        kazandirma felsefesiyle ciktik yolumuza. Bu nedenle, her kazandigimiz net liranin 8 kurusunu, Turkiye'de kadinlara yardim etmeye calisan hayir kurumu ve sivil
                        toplum orgutlerine bagislamayi taahut ediyoruz, ve bu taahutu daima yerine getirecegimize soz veriyoruz.
                    </a>
                </div>
            </div>
            <div className="homepage" id="homepage4">
                <div className="homepageTitleFinal"><h2>Haydi katil aramiza</h2></div>
                <div className="homepageFinalWords">
                Cunku bu klup seninle daha guzel. Hem kaliteli ped icin fazla fiyat odemeyi birak, hem pedim bitti derdine son ver, hem kapina getirttir. 
                Hem de bizimle beraber Turk Kadinlarini ve Turk ekonomisini destekle!
                <div className="homepageFooter">
                © Viva A.S, 2019
                </div>
                </div>
            </div>
            </div>
        </div>

        )
    }


}

// firebase stuff

const HomepageFirebase = withAuthentication(HomepageBase)

const Homepage = () => (
    <div>
        <HomepageFirebase/>
    </div>
)

export default Homepage;