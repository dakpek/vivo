import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Meter } from 'grommet';
import * as moment from 'moment';
import './mainPage.css'
import { withAuthorization } from '../Session';
import SideMenu from '../menu'
import { loader } from '../../assets'
import Homepage from '../homescreen/homescreen';

class Mainpage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            uid: "",
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

    calculateGraph() {
        if (this.state.user.packageBy > moment().date()) {
            let dayLeft = this.state.user.packageBy - moment().date()
            let graphValue = Math.round((dayLeft / 30) * 100)
            this.setState({dayLeft, graphValue, loading: false})
            this.setColor(graphValue)
        } else {
           let next = moment().date(this.state.user.packageBy).add(1, 'months')
           let dayLeft = next.diff(moment(), 'd')
           let graphValue = Math.round((dayLeft / 30) * 100)
            this.setState({dayLeft, graphValue, loading: false})
            this.setColor(graphValue)
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


    async componentWillMount() {
        await this.setState({uid: this.props.firebase.auth.currentUser.uid})
        let uid = this.state.uid
        return this.props.firebase.getUser(uid)
            .then((res) => {
                let user = res.val()
                user.firstName = this.nameConvert(user.firstName)
                user.lastName = this.nameConvert(user.lastName)
                this.setState({user})
            })
            .then(() => {
                this.calculateGraph()
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
            <SideMenu uid={this.props.uid} signOut={this.props.signOut}/>
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
                </div>
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Mainpage);