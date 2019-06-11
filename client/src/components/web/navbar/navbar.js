import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { connect } from 'react-redux'
import { shoppingEmpty, shoppingFull } from '../../../assets'
import { getUserAction, signOutAction } from '../../../redux/actions/actionCreators'



class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentWillMount() {
        if (localStorage.getItem('uid')) {
            let uid = localStorage.getItem('uid')
            console.log(uid)
            this.props.user.uid = uid
        }
    }

    signOut = () => {
        this.props.signOutAction()
    }

    render() {

        console.log('here', this.props.cart.box)
        return (
            <div className="navbarContainer">
                <div className="navbarField">
                    <Link to="/paketsec" className="navbarItem">Urunler</Link>
                    <Link to="/nasil" className="navbarItem">Nasil Calisir?</Link>
                    <Link to="/varolus" className="navbarItem">Bagis Kulturu</Link>
                </div>
                <div className="navbarTitle">
                    <div id="brand" className="navbarItem">8kadin</div>
                </div>
                <div className="navbarField">
                    {this.props.cart.content !== null && this.props.cart.totalPrice !== 0
                        ? <Link to="/cekaut"><img alt="shoppingCartFull" className="shoppingCart" src={shoppingFull} /></Link>
                        : <img alt="shoppingCartEmpty" className="shoppingCart" src={shoppingEmpty} />
                    }
                    {this.props.user.uid 
                        ? <Link to='/profil' className="navbarItem">Profilim</Link> 
                        : <Link to='/girisyap' className="navbarItem">Giris Yap</Link> 
                    }
                    {this.props.user.uid 
                        ? <Link onClick={this.signOut} to='/' className="navbarItem">Cikis</Link> 
                        : <Link to='/paketsec' className="navbarItem">Dene</Link> 
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ user, cart }) => {
    return { user, cart }
  }
  
  
  
  export default connect(mapStateToProps, {getUserAction, signOutAction})(Navbar)

