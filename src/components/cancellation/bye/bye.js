import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bye.css'
import { bye } from '../../../assets'

export default class ByeBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: "",
            name: ""
        }
    }


    render() {
        return (
            <div className="byeContainer">
            <div className="byeHeader1">Seni Ozleyecegiz! </div>
            <div className="byeHeader2">ne zaman donmek istersen, kalbimiz sana acik</div>
            <div className="byeBody">
            <img src={bye} className="byeImage" />
            <Link to='/' className="byeGo">Basgit</Link>
            </div>
            </div>
        )
    }
}
