import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import './menu.css';
import { Menu } from 'grommet-icons'
import Profile from '../settings/profile';
import Cancellation from '../cancellation'

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            settingsOpen: false
        }
    }

    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
      }
    
    toggleSettings = () => {
        this.setState({settingsOpen: !this.state.settingsOpen})
    }

    render() {
        if (!this.state.menuOpen) {
            return (<Menu 
            onClick={this.toggleMenu}
            className="menuIcon"/>)
        } else {
            return (
                <div className="menuContainer">
                    <Menu 
                    onClick={this.toggleMenu}
                    className="menuIcon"/>
                    <div className="menuRows">
                        <Link
                        to='/'
                        className="menuRow">Ana Sayfa</Link>
                        <div
                        onClick={this.toggleSettings} 
                        id="settings"
                        className="menuRow">Ayarlar</div>
                        <Link 
                        to='/paketim'
                        style={{
                            "display": this.state.settingsOpen ? "block" : "none"
                        }}
                        className="menuSubRow">Paket Degistir</Link>
                        <Link
                        to='/bilgilerim'
                        style={{
                            "display": this.state.settingsOpen ? "block" : "none"
                        }}
                        className="menuSubRow">Bilgilerini Guncelle</Link>
                        <div 
                        style={{
                            "display": this.state.settingsOpen ? "block" : "none"
                        }}
                        className="menuSubRow">Odeme Guncelle</div>
                        <Link 
                        to='/iptal' 
                        className="menuRow">Uyelik Iptali</Link>
                        <div className="XmenuRow">Hesap Bilgileri</div>
                        <div className="XmenuRow">Gecmis odemeler</div>
                        <Link 
                        to='/iletisim'
                        className="menuRow">Iletisim</Link>
                        <div className="menuRow">Policemiz</div>
                        <div className="XmenuRow">Viva Inc.</div>
                        <div className="XmenuRow">Bagislarin</div>
                        <SignOutButton/>
                    </div>
                </div>
            )
        }
    }
}




const SignOutButton = withFirebase( ({ firebase }) => (
  <Link 
  to='/'
  className="menuRow"
  type="button" 
  onClick={firebase.doSignOut}>
    Cikis Yap
  </Link>
));
