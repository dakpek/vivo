import React, { Component } from 'react';
import './checkout.css'

import {forward} from '../../../assets';

import { connect } from 'react-redux'
import { editUserAction, getCatalogAction } from '../../../redux/actions/actionCreators'

import SignUp1 from '../../signup/signup1'
import SignUp2 from '../../signup/signup2'
import Navbar from '../navbar'
import Payment from '../payment'

import Item from '../../simpleComponents/item'


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            payment: true,
            addressChange: false,
            checkboxes: {
                billingAddressSame: true,
                privacyPolicy: false,
                userAgreement: false,
                cardTokenization: false
            },
            address: {
                address1: '',
                address2: '',
                city: '',
                country: '',
                county: '',
                zipCode: "",
            }
        }
    }


        handleCheckbox = (event) => {
            let box = event.target.name;
            let checkboxes = this.state.checkboxes;
            checkboxes[box] = !this.state.checkboxes[box]
            console.log(this.state)
        }    

        changeAddress = () => {
            this.setState({addressChange: !this.state.addressChange})
            console.log(this.state)
        }

        handleAddressSubmit = async (event) => {
            event.preventDefault()
            let user = this.props.user.data;
            user.address = this.state.address
            let uid = this.props.user.uid;
            await this.props.editUserAction(uid, user)
            this.setState({addressChange: false})
        }

        handleAddressChange = event => {
            event.preventDefault()
            let address = this.state.address;
            console.log(event)
            address[event.target.name] = event.target.value;
            this.setState({address})
            console.log(this.state.address)
        }

       calculatePrice = () => {
           let price = (this.props.catalog.pads.normal * this.props.cart.pads.normal) + (this.props.catalog.pads.super * this.props.cart.pads.extra) + (this.props.catalog.pads.daily * this.props.cart.pads.daily)
           return Number(price).toFixed(2)
       }

        componentWillMount() {
            // this.props.getCatalogAction()
        }

        checkout = () => {
            this.setState({payment: true})
        }


        render() {

            let user = this.props.user
            console.log(this.state)
            return (
            <div className="checkoutComponent">
                <Navbar/>
                <div className="checkoutBox">
                    <div className="checkoutUsers">
                        <div 
                        style={user.uid
                            ? {border: "0px"}
                            : null
                        }
                        className="checkoutUser">
                            {user.uid
                            ? <div className="checkoutUsername">
                            Merhaba {
                                this.props.user.data.firstName
                                ? this.props.user.data.firstName
                                : <div className="checkoutNoUser">bizimle adini paylasirmisin?</div>
                            }
                            </div>
                            : <SignUp1/>
                            }
                        </div>
                        <div className={
                            this.state.payment
                            ? "checkoutNone"
                            : "checkoutUser"
                        }> 
                            {user.data.firstName
                            ? null
                            : <SignUp2 checkout={this.checkout} />
                            }
                        </div>
                        {
                            this.state.payment 
                            ? <div className="checkoutPayment">
                                <div className="checkoutAddress">
                                {this.props.user.data.address
                                ? <div className="checkoutAddressLine">
                                <div className="checkoutAddressWords">
                                    <div className="checkoutAddressHeader">Kargo Adresi</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.address1}</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.address2}</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.county}</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.city}l</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.zipCode}</div>
                                </div>
                                {this.state.addressChange ? <img className="addressForward" alt="addressForward" src={forward} /> : null }
                                {this.state.addressChange 
                                    ? 
                                    <div className="checkoutAddressAddressForm">
                                        <form className="checkoutAddressAddressChange">
                                        <input
                                        className="checkoutAddressAddressInput"
                                        type='string'
                                        id="address"
                                        name='address1'
                                        onChange={this.handleAddressChange}
                                        placeholder='Adres 1'/>
                                        <input
                                            className="checkoutAddressAddressInput"
                                            type='string'
                                            id="address"
                                            name='address2'
                                            onChange={this.handleAddressChange}
                                            placeholder='Adres 2'/>
                                            
                                        <input
                                            className="checkoutAddressAddressInput"
                                            type='string'
                                            id="address"
                                            name='county'
                                            onChange={this.handleAddressChange}
                                            placeholder='Ilce'/>
                                            
                                        <input
                                            className="checkoutAddressAddressInput"
                                            type='string'
                                            id="address"
                                            name='city'
                                            onChange={this.handleAddressChange}
                                            placeholder='Il'/>
                                            
                                        <input
                                            className="checkoutAddressAddressInput"
                                            id="address"
                                            type='number'
                                            name='zipCode'
                                            onChange={this.handleAddressChange}
                                            placeholder='Post Kodu'/>
                                        </form>
                                    </div>
                                    : null
                
                                }
                                <div className="checkoutAddressButtons">
                                    {this.state.addressChange 
                                        ? <button onClick={this.changeAddress} className="checkoutAddressCancel">Iptal</button>
                                        : <button onClick={this.changeAddress} className="checkoutAddressButton">Adres Degistir</button>
                                    }
                                    {this.state.addressChange ? <button onClick={this.handleAddressSubmit} className="checkoutAddressButton">Degistir</button> : null}
                                </div>
                            </div>
                                : null
                                }
                                </div>    
                                {this.state.checkboxes.billingAddressSame
                                ? <div className="checkoutCheckbox">
                                    <input type="checkbox" className="billingAddress" name="billingAddressSame" defaultChecked={this.state.checkboxes.billingAddressSame} onChange={this.handleCheckbox}/>

                                </div>
                                : <div className="checkoutAddress">
                                {this.props.user.data.address
                                ? <div className="checkoutAddressLine">
                                <div className="checkoutAddressWords">
                                    <div className="checkoutAddressHeader">Kargo Adresi</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.address1}</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.address2}</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.county}</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.city}l</div>
                                    <div className="checkoutAddressWord">{this.props.user.data.address.zipCode}</div>
                                </div>
                                {this.state.addressChange ? <img className="addressForward" alt="addressForward" src={forward} /> : null }
                                {this.state.addressChange 
                                    ? 
                                    <div className="checkoutAddressAddressForm">
                                        <form className="checkoutAddressAddressChange">
                                        <input
                                        className="checkoutAddressAddressInput"
                                        type='string'
                                        id="address"
                                        name='address1'
                                        onChange={this.handleAddressChange}
                                        placeholder='Adres 1'/>
                                        <input
                                            className="checkoutAddressAddressInput"
                                            type='string'
                                            id="address"
                                            name='address2'
                                            onChange={this.handleAddressChange}
                                            placeholder='Adres 2'/>
                                            
                                        <input
                                            className="checkoutAddressAddressInput"
                                            type='string'
                                            id="address"
                                            name='county'
                                            onChange={this.handleAddressChange}
                                            placeholder='Ilce'/>
                                            
                                        <input
                                            className="checkoutAddressAddressInput"
                                            type='string'
                                            id="address"
                                            name='city'
                                            onChange={this.handleAddressChange}
                                            placeholder='Il'/>
                                            
                                        <input
                                            className="checkoutAddressAddressInput"
                                            id="address"
                                            type='number'
                                            name='zipCode'
                                            onChange={this.handleAddressChange}
                                            placeholder='Post Kodu'/>
                                        </form>
                                    </div>
                                    : null
                
                                }
                                <div className="checkoutAddressButtons">
                                    {this.state.addressChange 
                                        ? <button onClick={this.changeAddress} className="checkoutAddressCancel">Iptal</button>
                                        : <button onClick={this.changeAddress} className="checkoutAddressButton">Adres Degistir</button>
                                    }
                                    {this.state.addressChange ? <button onClick={this.handleAddressSubmit} className="checkoutAddressButton">Degistir</button> : null}
                                </div>
                            </div>
                                : null
                                }
                                </div>    
                            }
                                <Payment/>
                            </div>
                            : null
                        }
                    </div>
                    {/* <img alt="checkoutBackground" className="checkoutBackground" src={flower1} /> */}
                    <div className="checkoutItem">
                        <div className="checkoutHeader">Eklenenler</div>
                        <div className="checkoutPackage">
                            {(this.props.cart.pads.normal == 0) || (this.props.cart.pads.normal == null)
                                ? null
                                : <Item padNumber={this.props.cart.pads.normal} cartItem="normal" padType="Normal" price={this.props.catalog.pads.normal * this.props.cart.pads.normal} />
                            }
                            {(this.props.cart.pads.extra == 0) || (this.props.cart.pads.extra == null)
                                ? null
                                : <Item padNumber={this.props.cart.pads.extra} cartItem="extra" padType="Super" price={this.props.catalog.pads.super * this.props.cart.pads.extra} />
                            }
                            {(this.props.cart.pads.daily == 0) || (this.props.cart.pads.daily == null)
                                ? null
                                : <Item padNumber={this.props.cart.pads.daily} cartItem="daily" padType="Gunluk" price={this.props.catalog.pads.daily * this.props.cart.pads.daily} />
                            }
                        </div>
                        <div className="checkoutMathBox">
                            <div className="checkoutMathLine">
                                <div className="checkoutMath">Tutar</div>
                                <div className="checkoutMath">{this.calculatePrice()} TL</div>
                            </div>
                            <div className="checkoutMathLine">
                                <div className="checkoutMath">Kargo</div>
                                <div className="checkoutMath">0.00 TL</div>
                            </div>
                            <div className="checkoutMathSeperator"></div>
                            <div id="total" className="checkoutMathLine">
                                <div className="checkoutMath">Toplam</div>
                                <div className="checkoutMath">{this.calculatePrice()} TL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
}

const mapStateToProps = ({ user, catalog, cart }) => {
    return { user, catalog, cart }
  }
  
  
  
  export default connect(mapStateToProps, { editUserAction, getCatalogAction })(Checkout)