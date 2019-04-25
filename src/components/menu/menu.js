import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import './menu.css';
import { Menu } from 'grommet-icons'

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            settingsOpen: false
        }
    }

    signOut = () => {
        firebase.auth.signOut()
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
                        to='/home'
                        className="menuRow">Ana Sayfa</Link>
                        <div
                        onClick={this.toggleSettings} 
                        id="settings"
                        className="menuRow">Ayarlar</div>
                        <div 
                        style={{
                            "display": this.state.settingsOpen ? "block" : "none"
                        }}
                        className="menuSubRow">Paket Degistir</div>
                        <div 
                        style={{
                            "display": this.state.settingsOpen ? "block" : "none"
                        }}
                        className="menuSubRow">Bilgilerini Guncelle</div>
                        <div 
                        style={{
                            "display": this.state.settingsOpen ? "block" : "none"
                        }}
                        className="menuSubRow">Odeme Guncelle</div>
                        <div className="menuRow">Uyelik Iptali</div>
                        <div className="XmenuRow">Hesap Bilgileri</div>
                        <div className="XmenuRow">Gecmis odemeler</div>
                        <Link 
                        to='/iletisim'
                        className="menuRow">Iletisim</Link>
                        <div className="menuRow">Policemiz</div>
                        <div className="XmenuRow">Viva Inc.</div>
                        <div className="XmenuRow">Bagislarin</div>
                        <Link
                        to='/'
                        onClick={this.signOut}
                        className="menuRow">Cikis Yap</Link>
                    </div>
                </div>
            )
        }
    }
}