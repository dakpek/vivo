import React, { Component } from 'react';
import './package.css';
import { withFirebase } from '../../Firebase'
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { extra, normal } from '../../../assets'
import { loader } from '../../../assets'
import SideMenu from '../../menu';



class PackageBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid : "",
            user : {},
            error : "",
            edit : false,
            loading: true,
            selected : 0,
        }
    }


async componentWillReceiveProps(nextProps) {
    if (nextProps.firebase.auth.currentUser) {
        let uid = this.props.firebase.auth.currentUser.uid
        console.log(uid)
        this.setState({uid})
        return this.props.firebase.getUser(uid)
            .then((res) => {
                console.log(res.val())
                let user = res.val();
                console.log(user)
                this.setState({user})
                let selected = 0
                if (user.type === 'regular') {
                    selected = 1
                } else {
                    selected = 2
                }
                this.setState({user, selected, loading: false})
            })
    }
}

openEdit = () => {
    let editOld = this.state.edit
    this.setState({edit: !editOld})
}

submitForm = () => {
    let { user, uid} = this.state
    this.props.fireBase.setUser(uid, user).then(() => this.props.history.push('/'))
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
            <div className="packageContainer">
            <SideMenu />
            <div className="package-hello">Paket secimini yap</div>
            <div className="package-hello2">Gecen ay kac tane ped kullandin?</div>
                <form className="package-form" onSubmit={this.props.firebase.setUser(this.state.uid, this.state.user)}>
                    <div 
                    className="type" 
                    id="regular" 
                    style={this.state.selected == 1 
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                    onClick={() => {
 
                            let user = this.state.user;
                            user.type = "regular"
                            this.setState({selected: 1, user})
                    }}>
                        <div className="typeTitle">normal</div>
                        <img className="typeImage" src={normal}/>
                        <div className="typeDesc">
                        5 gece, 
                        5 uzun, 
                        6 normal 
                        </div>
                        <div className="typePrice">14 TL</div>
                    </div>
                    <div 
                    className="type" 
                    id="extra" 
                    style={this.state.selected == 2 
                        ? {"backgroundColor": "rgba(127, 24, 51, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                    onClick={() => {
                            let user = this.state.user;
                            user.type = "extra"
                            this.setState({selected: 2, user})
                    }}>
                        <div className="typeTitle">extra</div>
                        <img className="typeImage" src={extra}/>
                        <div className="typeDesc">
                        7 gece, 
                        7 uzun, 
                        8 normal 
                        </div>
                        <div className="typePrice">16 TL</div>
                    </div>
                    <div className="signUpFormButtons">
                            <div
                            onClick={this.openEdit}                                     
                            className="package-goBack">
                            Degistir
                            </div>
                            <button                                      
                            type='submit'
                            disabled={!this.state.edit}
                            className="package-submit">
                            Tamam
                            </button>
                        </div>
                </form>
            </div>
        )
    }
}



//firebase stuff

const PackageFirebase = compose(
    withRouter,
    withFirebase,
    )(PackageBase);


    
const Package = () => (
        <div>
            <PackageFirebase />
        </div>
)

export default Package;