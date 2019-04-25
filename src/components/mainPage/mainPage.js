import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Meter } from 'grommet';
import * as moment from 'moment';
import './mainPage.css'
import SideMenu from '../menu'
import { loader } from '../../assets'


export default class Mainpage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            uid: "2NAP9pnL1tU4NZluvuEC8GQCedY2",
            user: {},
            graphValue: "",
            graphColorR: 91,
            graphColorG: 24,
            graphColorB: 191,
            dayLeft: ""
        }
    }

    setColor(value) {
        if (value > 50) {
            let r = this.state.graphColorR;
            let dr = (value - 50) * 2;
            r = r + dr;
            this.setState({graphColorR: r})
        } else {
            let b = this.state.graphColorB;
            let db = value * 2;
            b = b - db;
            this.setState({graphColorB: b})
        }
    }

    async calculateGraph() {
        if (this.state.user.packageBy > moment().date()) {
            let dayLeft = this.state.user.packageBy - moment().date()
            let graphValue = Math.round((dayLeft / 30) * 100)
            this.setState({dayLeft, graphValue})
            await this.setColor(graphValue)
        } else {
           let next = moment().date(this.state.user.packageBy).add(1, 'months')
           let dayLeft = next.diff(moment(), 'd')
           let graphValue = Math.round((dayLeft / 30) * 100)
            this.setState({dayLeft, graphValue, loading: false})
            await this.setColor(graphValue)
        }
    }

    nameConvert(name) {
            let lowerName = name.toLowerCase();
            let firstLetter = name.substring(0,1)
            firstLetter = firstLetter.toUpperCase();
            let rest = name.substring(1,name.length)
            let res = firstLetter + rest;
            return res
    }


    componentWillMount() {

        // Initialize firebase if not initialized
        let firebaseConfig = {
          apiKey: "AIzaSyCHcfez2Dc4UHn9611joddAaEdemkLo4MQ",
          authDomain: "vivo-b3f86.firebaseapp.com",
          databaseURL: "https://vivo-b3f86.firebaseio.com",
          projectId: "vivo-b3f86",
          storageBucket: "vivo-b3f86.appspot.com",
          messagingSenderId: "72620720352"
        };
        
        if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)
        
        if (firebase.auth().currentUser) {
            this.setState({uid: firebase.auth().currentUser.uid})
        } else {
            this.setState({uid: this.props.uid})
        }

        let uid = this.state.uid;
        
        return firebase.database().ref('/users/' + uid).once('value')
            .then((res) => {
                let user = res.val()
                user.firstName = this.nameConvert(user.firstName)
                user.lastName = this.nameConvert(user.lastName)
                this.setState({user})
                console.log(this.state.user)
                
            })
            .then(() => {
                this.calculateGraph()
                console.log(this.state)
            })
            .catch((err) => {
                console.log('ERROR: ', err.code, err)
            })
      }



    

    render() {

        if (this.state.loading) {
            return (
                <div className="loader">
                    <img src={loader} className="loadingIcon"/>
                </div>

            )
        }

        return (
            <div className="mainpageContainer">
            <SideMenu/>
                <div className="mainpageWelcome">
                    <div className="mainpageHeader">Hosgeldin <b>{this.state.user.firstName}</b></div>
                    <div className="mainpageBody">
                        <div className="mainpageGraph">
                        <Meter 
                        values={[{
                            value: this.state.graphValue,
                            color: `rgb(${this.state.graphColorR}, ${this.state.graphColorG}, ${this.state.graphColorB})`
                          }]}
                          round="true"
                          type='circle'
                        />
                        </div>
                        <div className="mainpageGraphWords">birdahaki paketine<div className="graphWordsNumber">{this.state.dayLeft}</div>gun kaldi</div>
                        <button className="skipPackage">
                          Bu ayki paketi atla
                        </button>
                    </div>
                    <div className="mainpageButtons">
                        <button className="editSettingsButton">
                            Bilgilerini Guncelle
                        </button>
                        <div className="editSettings">
                            <div className="editInfo"></div>
                            <div className="editPayment"></div>
                            <div className="editPackage"></div>
                        </div>
                        <button className="unsubcribe">
                            Uyelik Islemleri
                        </button>
                        <div className="unsubcribe"></div>
                        <button className="contactUs">Iletisime Gecin</button>
                        <button className="signOut">Cikis yap</button>
                    </div>
                </div>
            </div>
        )
    }
}