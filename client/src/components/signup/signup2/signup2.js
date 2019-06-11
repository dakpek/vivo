import React, { Component } from 'react';
import { editUserAction } from '../../../redux/actions/actionCreators'
import './signup2.css'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class SignUp2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            phoneNumber: "5382959945",
            firstName: "Sabiha",
            lastName: "Gokcen",
            address: {
                address1: 'Kemer',
                address2: 'Country',
                city: 'Istanbul',
                country: 'Turkey',
                county: 'Eyup',
                zipCode: 34077,
            }
        }
    }
    
    
    
    handleChange = (event) => {

        if (event.target.id == "address") {
            let id = event.target.name;
            let address = this.state.address;
            address[id] = event.target.value
            this.setState({address});
        } else {
            this.setState({
              [event.target.name]: event.target.value
            });
        }

      }

    handleSubmit = async (event) => {
        event.preventDefault()
        let data = Object.assign({}, this.state)
        delete data.error;
        let uid = this.props.user.uid;
        await this.props.checkout()
        await this.props.editUserAction(uid, data)
    }
    
    
    render() {

            return (
            <div className="signUp2">
                <form className="signUp2-form" onSubmit={this.handleSubmit}>
                <div className="signUp2Line">
                    <div className="signUp2-inputExplanation">Ismin</div>
                    <input
                        className="signUp2-input"
                        type='string'
                        id="firstName"
                        name='firstName'
                        onChange={this.handleChange}
                        placeholder='Sabiha'/>
                </div>
                <div className="signUp2Line">
                    <div className="signUp2-inputExplanation">Soyismin</div>
                    <input
                        className="signUp2-input"
                        type='string'
                        id="lastName"
                        name='lastName'
                        onChange={this.handleChange}
                        placeholder='Gokcen'/>
                </div>
                <div className="signUp2Line">
                    <div className="signUp2-inputExplanation">Adresin</div>
                    <div className="signUp2-address">
                    <input
                        className="signUp2-input"
                        type='string'
                        id="address"
                        name='address1'
                        onChange={this.handleChange}
                        placeholder='Adres 1'/>
                        
                    <input
                        className="signUp2-input"
                        type='string'
                        id="address"
                        name='address2'
                        onChange={this.handleChange}
                        placeholder='Adres 2'/>
                        
                    <input
                        className="signUp2-input"
                        type='string'
                        id="address"
                        name='county'
                        onChange={this.handleChange}
                        placeholder='Ilce'/>
                        
                    <input
                        className="signUp2-input"
                        type='string'
                        id="address"
                        name='city'
                        onChange={this.handleChange}
                        placeholder='Il'/>
                        
                    <input
                        className="signUp2-input"
                        id="address"
                        type='number'
                        name='zipCode'
                        onChange={this.handleChange}
                        placeholder='Post Kodu'/>
                    </div>
                </div>
                <div className="signUp2Line">
                    <div className="signUp2-inputExplanation">Telefon Numaran</div>
                    <input
                        id="phone"
                        className="signUp2-input"
                        type='number'
                        name='phoneNumber'
                        onChange={this.handleChange}
                        placeholder='05XX-XXX-XXXX'/>
                        <br/>
                </div>
                    <div className="signUpFormButtons">
                            <Link
                            to='/paketsec'                                     
                            className="signUp2-goBack">
                            Sepete Don
                            </Link>
                            <button
                            type='submit'                                     
                            className="signUp2-submit">
                            Odemeye Gec
                            </button>
                        </div>
                        
                </form>
            </div>
            )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
  }
  
  
  
  export default connect(mapStateToProps, { editUserAction })(SignUp2)

// Error Caseler bakilacak
// Phone number entry icin npm package vs. bakilacak