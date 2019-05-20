import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';



export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="navbarContainer">
                <div className="navbarField">
                    <Link to="/paketsec" className="navbarItem">Urunler</Link>
                    <Link className="navbarItem">Nasil Calisir?</Link>
                    <Link className="navbarItem">Bagis Kulturu</Link>
                </div>
                <div className="navbarTitle">
                    <div className="navbarItem">xyz</div>
                </div>
                <div className="navbarField">
                    <Link className="navbarItem">Giris Yap</Link>
                    <Link className="navbarItem">Dene</Link>
                </div>
            </div>
        )
    }
}

