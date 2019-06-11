import React, { Component } from 'react';
import './payment.css';
import Axios from 'axios';
import CreditCardInput from 'react-credit-card-input';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="paymentContainer">
                <div className="cardContainer">
                <CreditCardInput
                    className="creditCard"
                    customTextLabels={{
                        invalidCardNumber: 'Kart numaraniz gecersizdir',
                        invalidCvc: 'CVC kodunuz gecersizdir',
                        cardNumberPlaceholder: 'Kart numaraniz',
                        expiryPlaceholder: 'AA/YY',
                        cvcPlaceholder: 'CVC',
                    }}
                    cardNumberInputProps={{ id: "cardNumber", value: this.props.card.cardNumber, onChange: this.props.handleCard }}
                    cardExpiryInputProps={{ id: "cardExpiry", value: this.props.card.expiry, onChange: this.props.handleCard }}
                    cardCVCInputProps={{ id: "cardCVC", value: this.props.card.cvc, onChange: this.props.handleCard }}
                    containerClassName="cardBox"
                    fieldClassName="cardinput"
                />
                </div>
                <button className="paymentButton" onClick={this.props.submitPayment}>Ode</button>
            </div>
        )
    }
}