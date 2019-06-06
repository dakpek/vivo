import React, { Component } from 'react';
import './payment.css';
import Axios from 'axios';
import CreditCardInput from 'react-credit-card-input';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: 'Doruk Akpek',
            cardNumber: '',
            cardExpiry: "",
            cardCVC: '',

        }
    }

    submitPayment = () => {

    }

    

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
        console.log(this.state)
      }


    
    render() {
        return (
            <div className="paymentContainer">
                <div className="cardContainer">
                <CreditCardInput
                    className="creditCard"
                    customTextLabels={{
                        invalidCardNumber: 'Kart numaraniz gecersizdir',
                        expiryError: {
                            invalidExpiryDate: 'Son kullanma tarihiniz gecersizdir',
                            monthOutOfRange: 'Oyle bir ay yok :)',
                            yearOutOfRange: 'Oyle bir yil yok :)',
                            dateOutOfRange: 'Oyle bir tarih yok :)'
                        },
                        invalidCvc: 'CVC kodunuz gecersizdir',
                        invalidZipCode: 'El código postal es inválido',
                        cardNumberPlaceholder: 'Kart numaraniz',
                        expiryPlaceholder: 'AA/YY',
                        cvcPlaceholder: 'CVC',
                    }}
                    cardNumberInputProps={{ id: "cardNumber", value: this.state.cardNumber, onChange: this.handleChange }}
                    cardExpiryInputProps={{ id: "cardExpiry", value: this.state.expiry, onChange: this.handleChange }}
                    cardCVCInputProps={{ id: "cardCVC", value: this.state.cvc, onChange: this.handleChange }}
                    containerClassName="cardBox"
                    fieldClassName="cardnput"
                />
                </div>
                <button className="paymentButton" onClick={this.submitPayment}>Ode</button>
            </div>
        )
    }
}