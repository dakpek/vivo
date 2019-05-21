import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { twitter, instagram, facebook} from '../../../assets'

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            email : "",
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
 
    render() {
        return (
            <div className="footerContainer">
                <div className="footerHeader">
                <div className="footerWord">Denemeye Hazirmisin?</div>
                <Link to='/paketsec' className="trymeFooter">Sen de dene</Link>
                </div>
                <div className="footerBoxes">
                    <div className="footerBox">
                    <div className="boxHeader">________ A.S</div>
                    <Link to="/gizlilik" className="footerLink">Gizlilik Sozlesmesi</Link>
                    <Link to="/kullanim-kosullari" className="footerLink">Kullanim Kosullari</Link>
                    <Link to="/sss" className="footerLink">SSSorular</Link>
                    <Link to="/anlasmalar" className="footerLink">Anlasmalar & Toptan</Link>
                    </div>
                    <div className="footerBreak"></div>
                    <div className="footerBox">
                    <div className="boxHeader">Arayi acmayalim</div>
                    <div className="emailBeg">e-mailinize, _____ olarak promosyonlarimiz, anlasmalarimiz, yeni urunlerimiz ve bizden haberler damlasin.</div>
                    <form onSubmit={() => console.log('form submitted')} className="landingEmail">
                        <input 
                        className="landingEmailField" 
                        name="email" 
                        onChange={this.handleChange} 
                        placeholder="email" 
                        type="email"/>
                        <button className="landingEmailSubmit" type="submit">></button>
                    </form>
                    </div>
                    <div className="footerBreak"></div>
                    <div className="footerBox">
                    <div className="boxHeader">Bize Ulasin</div>
                        <div className="footerWord">hello@_____.com</div>
                        <div className="footerSocialLinks">
                            <img alt="twitter" className="socialMedia" src={twitter} />
                            <img alt="facebook" className="socialMedia" src={facebook} />
                            <img alt="instagram" className="socialMedia" src={instagram} />
                        </div>
                    </div>
                </div>
                <div className="footerEnd"> © ______ AS, 2019</div>
            </div>
        )
    }
}