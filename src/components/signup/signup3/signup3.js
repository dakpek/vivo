import React, { Component } from 'react';
import { extra, normal } from '../../../assets'
import * as firebase from 'firebase';
import './signup3.css'

export default class SignUp3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    render() {
        return (
            <div className="signUp3">
            <div className="signUp3-hello">Paket secimini yap</div>
            <div className="signUp3-hello2">Gecen ay kac tane ped kullandin?</div>
                <form className="signup3-form" onSubmit={this.props.writeData}>
                    <div 
                    className="type" 
                    id="regular" 
                    style={this.state.selected == 1 
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                    onClick={() => {
                        if (this.state.selected == 1) { 
                            this.setState({selected: 0})
                        } else {
                            this.setState({selected: 1})
                        }
                        this.props.handleType("regular")
                    }}>
                        <div className="typeTitle">normal</div>
                        <img className="typeImage" src={normal}/>
                        <div className="typeDesc">
                        5 gece, 
                        5 uzun, 
                        6 normal 
                        </div>
                        <div className="typePrice">10TL + kargo</div>
                    </div>
                    <div 
                    className="type" 
                    id="extra" 
                    style={this.state.selected == 2 
                        ? {"backgroundColor": "rgba(127, 24, 51, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                    onClick={() => {
                        if (this.state.selected == 2) { 
                            this.setState({selected: 0})
                        } else {
                            this.setState({selected: 2})
                        }
                        this.props.handleType("regular")
                    }}>
                        <div className="typeTitle">extra</div>
                        <img className="typeImage" src={extra}/>
                        <div className="typeDesc">
                        7 gece, 
                        7 uzun, 
                        8 normal 
                        </div>
                        <div className="typePrice">11.50TL + kargo</div>
                    </div>
                    <div className="signUpFormButtons">
                            <button
                            onClick={this.props.pageBackward}                                     
                            className="signUp3-goBack">
                            Geri Git
                            </button>
                            <button                                      
                            type='submit'
                            className="signUp3-submit">
                            Devam
                            </button>
                        </div>
                </form>
            </div>
        )
    }
}