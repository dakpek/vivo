import React, { Component } from 'react';
import './checkout.css'

import {forward, checkout} from '../../../assets';

import { connect } from 'react-redux'
import { editUserAction, getBoxesAction, cartChangeAction } from '../../../redux/actions/actionCreators'

import SignUp1 from '../../signup/signup1'
import SignUp2 from '../../signup/signup2'
import Navbar from '../navbar'
import Payment from '../payment'

import moment from 'moment';
import axios from 'axios';

import Item from '../../simpleComponents/item'
import Popup from '../../simpleComponents/popup'


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            privacyPopup: false,
            userAgreementPopup: false,
            payment: true,
            addressChange: false,
            card: {
                cardNumber: null,
                cardExpiry: null,
                cardExpiryMonth: null,
                cardExpiryYear: null,
                cardCVC: null,
            },
            checkboxes: {
                billingAddressSame: false,
                privacyPolicy: false,
                userAgreement: false,
                cardTokenization: false
            },
            checkboxesFilled: false,
            address: {
                address1: '',
                address2: '',
                city: '',
                country: '',
                county: '',
                zipCode: "",
            },
            confirmation: {
                uid: null,
                privacyAgreement: 1,
                cardTokenizationAgreement: 1,
                ToSAgreement: 1
            },
            billingInfo: {
                firstName: '',
                lastName: '',
                address: {
                    address1: '',
                    address2: '',
                    city: '',
                    country: '',
                    county: '',
                    zipCode: "",
                },
            }
        }
    }

    //pop up controllers

        handlePrivacyPopup = () => {
            this.setState({privacyPopup: !this.state.privacyPopup})
        }

        handleUserAgreementPopup = () => {
            this.setState({userAgreementPopup: !this.state.userAgreementPopup})
        }
    
    // BILLING ADDRESS

        addBilling = (props) => {
            let {address, firstName, lastName } = props.user.data;
            let uid = props.user.uid;
            let state = this.state;
            state.billingInfo.firstName = firstName
            state.billingInfo.lastName = lastName;
            state.billingInfo.address = address;
            state.confirmation.uid = uid
            this.setState(state);
            
        }

        // handleBilling = (event) => {
        //     event.preventDefault();
        //     let billingInfo = this.state.billingInfo;
        //     console.log(event)
        //     if (event.target.id == 'address') {
        //         billingInfo.address[event.target.name] = event.target.value;
        //     } else {
        //         billingInfo[event.target.name] = event.target.id
        //     }
        //     this.setState({billingInfo})
        //     console.log(this.state.billingInfo)
        // }

        // submitBilling = () => {

        // }

        //CHECKBOXES

        handleCheckbox = (event) => {
            let box = event.target.name;
            let checkboxes = this.state.checkboxes;
            checkboxes[box] = !this.state.checkboxes[box]
            this.setState({checkboxes})
        }   

        handlePrivacy = (event) => {
            this.handleCheckbox(event)
            let now = moment.now()
            let confirmation = this.state.confirmation;
            confirmation.privacyAgreement = now;
            this.setState({confirmation})
        }

        handleTokenization = (event) => {
            this.handleCheckbox(event)
            let now = moment.now()
            let confirmation = this.state.confirmation;
            confirmation.cardTokenizationAgreement = now;
            this.setState({confirmation})
        }

        handleToS = (event) => {
            this.handleCheckbox(event)
            let now = moment.now()
            let confirmation = this.state.confirmation;
            confirmation.ToSAgreement = now;
            this.setState({confirmation})
        }

        checkboxChecker = () => {
            let boxes = this.state.confirmation
            if (boxes.privacyAgreement !== null && boxes.ToSAgreement !== null && boxes.cardTokenizationAgreement !== null && this.state.checkboxesFilled !== true) {
                this.setState({checkboxesFilled: true})
                console.log('true')
            } 
        }

        changeAddress = () => {
            this.setState({addressChange: !this.state.addressChange})
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

        //CARD 

        handleCard = event => {
            let card = this.state.card;
            console.log(card)
            card[event.target.id] = event.target.value;
            this.setState({card})

        }

        // PAYMENT 

        submitPayment = async () => {
            let user = this.props.user.data;
            let uid = this.props.user.uid
            let confirmations = this.state.confirmation
            confirmations.uid = uid
            let price = this.props.cart.totalPrice.toFixed(2)
            user.billingInfo = this.state.billingInfo;
            user.enrolled = moment()
            await axios.post("http://localhost:3001/confirmation", this.state.confirmation)
            await this.props.editUserAction(uid, user)
            let card = this.state.card
            let one = card.cardNumber.substring(0,4)
            let two = card.cardNumber.substring(5,9)
            let three = card.cardNumber.substring(10,14)
            let four = card.cardNumber.substring(15,19)
            card.cardNumber = one + two + three + four
            console.log('CARD NO: ', card.cardNumber)
            card.cardNumber = Number(card.cardNumber)
            console.log('CARD NUMBER: ', card.cardNumber)
            console.log('CARD NUMBER: ', Number(card.cardNumber))
            let month = card.cardExpiry.slice(0,2)
            let year = card.cardExpiry.slice(5,7)
            card.cardExpiryMonth = month;
            card.cardExpiryYear = year;
            delete card.cardExpiry;
            console.log(card)
            let res = await axios.post("http://localhost:3001/addCard", {card: card, user: this.props.user.data})
            .then(res => res.data)
            console.log(res)
            user.card = {
                cardUserKey: res.cardUserKey,
                token: res.cardToken,
                type: res.cardAssociation || 'none',
                last4: res.lastFourDigits,
            }
            await this.props.editUserAction(uid, user)
            let payment = await axios.post("http://localhost:3001/pay", {user, price})
            console.log(payment.data)

        }



        // DELETE ITEM

        findBox = () => {

            let cart = this.props.cart.content;
            let box = {}
    
            box = this.props.boxes.list.find((el) => {
                    return (el.content === cart.content)
                })
            return box
        }

        deleteItem = async (item) => {
            let cart = Object.assign({}, this.props.cart);
            cart.content.pads[item] = 0
            console.log('1: ', cart.content)
            let boxes = this.props.boxes.list;
            console.log(boxes)
            let box = 'hello'
            box = boxes.find((el) => {
                console.log(el.content)
                return (el.content.pads.daily === cart.content.pads.daily && el.content.pads.normal === cart.content.pads.normal && el.content.pads.extra === cart.content.pads.extra)
            })
            console.log('BOX: ', box)
            this.props.cartChangeAction(box)
            console.log('2: ', this.props.cart)
        }


        componentWillMount() {
            this.props.getBoxesAction()

            if (this.props.cart.content !== null) this.setState({loading: false})
        }
        
        componentDidUpdate(prevProps) {
            if (prevProps.cart.content == null && this.props.cart.content) {
                this.setState({loading: false})
            }
    
        }

        checkout = () => {
            this.setState({payment: true})
        }


        render() {

            this.checkboxChecker()
            let user = this.props.user;
            let cart = this.props.cart;

            if (this.state.loading) return <div className="loading">loading...</div>


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
                                {user.data.address
                                ? <div className="checkoutAddressLine">
                                <div className="checkoutAddressWords">
                                    <div className="checkoutAddressHeader">Kargo Adresi</div>
                                    <div className="checkoutAddressWord">{user.data.address.address1}</div>
                                    <div className="checkoutAddressWord">{user.data.address.address2}</div>
                                    <div className="checkoutAddressWord">{user.data.address.county}</div>
                                    <div className="checkoutAddressWord">{user.data.address.city}l</div>
                                    <div className="checkoutAddressWord">{user.data.address.zipCode}</div>
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
                                {/* <div className="checkoutCheckboxBox">
                                    <input type="checkbox" className="checkoutCheckbox" name="billingAddressSame" defaultChecked={this.state.checkboxes.billingAddressSame} onChange={this.handleCheckbox}/>
                                    <div className="checkoutCheckboxLabel"> Fatura bilgilerim kargo bilgilerim ile ayni</div>
                                </div>   
                                {this.state.checkboxes.billingAddressSame
                                ? null
                                : <div className="checkoutAddress">
                                    <div className="checkoutBillingAddressHeader">Fatura Bilgilerim</div>
                                    <div className="checkoutBillingAddressForm">
                                        <form className="checkoutBillingAddressChange">
                                        <input
                                            className="checkoutBillingAddressInput"
                                            type='string'
                                            name='firstName'
                                            onChange={this.handleBilling}
                                            placeholder='Ad'/>
                                        <input
                                            className="checkoutBillingAddressInput"
                                            type='string'
                                            name='lastName'
                                            onChange={this.handleBilling}
                                            placeholder='Soyad'/>
                                        <div className="billingSeperator"></div>
                                        <input
                                            className="checkoutBillingAddressInput"
                                            type='string'
                                            id="address"
                                            name='address1'
                                            onChange={this.handleBilling}
                                            placeholder='Adres 1'/>
                                        <input
                                            className="checkoutBillingAddressInput"
                                            type='string'
                                            id="address"
                                            name='address2'
                                            onChange={this.handleBilling}
                                            placeholder='Adres 2'/>
                                            
                                        <input
                                            className="checkoutBillingAddressInput"
                                            type='string'
                                            id="address"
                                            name='county'
                                            onChange={this.handleBilling}
                                            placeholder='Ilce'/>
                                            
                                        <input
                                            className="checkoutBillingAddressInput"
                                            type='string'
                                            id="address"
                                            name='city'
                                            onChange={this.handleBilling}
                                            placeholder='Il'/>
                                            
                                        <input
                                            className="checkoutBillingAddressInput"
                                            id="address"
                                            type='number'
                                            name='zipCode'
                                            onChange={this.handleBilling}
                                            placeholder='Post Kodu'/>
                                        </form>
                                    <div className="checkoutAddressButtons">
                                            <button onClick={this.changeBilling} className="checkoutAddressButton">Onayla</button>
                                    </div>
                                    </div>
                            </div>  
                            } */}
                                <div className="checkoutCheckboxBox">
                                    <input type="checkbox" className="checkoutCheckbox" name="billingAddressSame" defaultChecked={this.state.checkboxes.Popup} onChange={this.handleToS}/>
                                    <div className="checkoutCheckboxLabel"> <div className="popupLabel" onClick={this.handleUserAgreementPopup}> Kullanici Sozlesmesini</div> &nbsp;onayliyorum</div>
                                    <Popup 
                                    header="Kullanici Sozlesmesi"
                                    open={this.state.userAgreementPopup} 
                                    handlePopup={this.handleUserAgreementPopup} />
                                </div>   
                                <div className="checkoutCheckboxBox">
                                    <input type="checkbox" className="checkoutCheckbox" name="billingAddressSame" defaultChecked={this.state.checkboxes.privacyPolicy} onChange={this.handlePrivacy}/>
                                    <div className="checkoutCheckboxLabel"> <div className="popupLabel" onClick={this.handlePrivacyPopup}> Gizlilik Anlasmasini</div> &nbsp;onayliyorum</div>
                                    <Popup
                                    header="Gizlilik Anlasmasi"
                                    open={this.state.privacyPopup} 
                                    handlePopup={this.handlePrivacyPopup} />
                                </div>   
                                <div className="checkoutCheckboxBox">
                                    <input type="checkbox"  className="checkoutCheckbox" name="billingAddressSame" defaultChecked={this.state.checkboxes.cardTokenization} onChange={this.handleTokenization}/>
                                    <div id="extra" className="checkoutCheckboxLabel">Abonelik odemelerim icin kart bilgilerimin kriptografik olarak saklanmasini onayliyorum</div>
                                </div>
                                {this.state.payment
                                ? <div className="checkoutPayment">
                                    <div className={this.state.checkboxesFilled ? "checkoutPaymentBlockerInactive" : "checkoutPaymentBlockerActive"} />    
                                    <Payment 
                                        confirmations={this.state.confirmation} 
                                        card={this.state.card} 
                                        submitPayment={this.submitPayment} 
                                        handleCard={this.handleCard} />
                                    </div>
                                : null
                                }
                                
                            </div>
                            : null
                        }
                    </div>
                    <div className="checkoutItem">
                        <img alt="checkoutBackground" className="checkoutBackground" src={checkout} />
                        <div className="checkoutHeader">Eklenenler</div>
                        <div className="checkoutPackage">
                            {(cart.content.pads.normal == 0) || (cart.content.pads.normal == null)
                                ? null
                                : <Item deleteItem={() => this.deleteItem('normal')} padNumber={cart.content.pads.normal} padType="Normal" price={cart.prices.pads.normal.toFixed(2)} />
                            }
                            {(cart.content.pads.extra == 0) || (cart.content.pads.extra == null)
                                ? null
                                : <Item deleteItem={() => this.deleteItem('extra')} padNumber={cart.content.pads.extra} padType="Super" price={cart.prices.pads.extra.toFixed(2)} />
                            }
                            {(cart.content.pads.daily == 0) || (cart.content.pads.daily == null)
                                ? null
                                : <Item deleteItem={() => this.deleteItem('daily')} padNumber={cart.content.pads.daily} padType="Gunluk" price={cart.prices.pads.daily.toFixed(2)} />
                            }
                        </div>
                        <div className="checkoutMathBox">
                            <div className="checkoutMathLine">
                                <div className="checkoutMath">Tutar</div>
                                <div className="checkoutMath">{cart.totalPrice.toFixed(2)} TL</div>
                            </div>
                            <div className="checkoutMathLine">
                                <div className="checkoutMath">Kargo</div>
                                <div className="checkoutMath">0.00 TL</div>
                            </div>
                            <div className="checkoutMathSeperator"></div>
                            <div id="total" className="checkoutMathLine">
                                <div className="checkoutMath">Toplam</div>
                                <div className="checkoutMath">{cart.totalPrice.toFixed(2)} TL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
}

const mapStateToProps = ({ user, boxes, cart }) => {
    return { user, boxes, cart }
  }
  
  
  
  export default connect(mapStateToProps, { editUserAction, getBoxesAction, cartChangeAction })(Checkout)