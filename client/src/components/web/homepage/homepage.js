import React, { Component } from 'react';
import firebase from 'firebase'
import './homepage.css';
import Navbar from '../navbar'
import { forward } from '../../../assets'
import { editUserAction } from '../../../redux/actions/actionCreators';
import { connect } from 'react-redux';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            addressChange: false,
            cardChange: false,
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
        let address = this.state.address;
        console.log(event)
        address[event.target.name] = event.target.value;
        this.setState({address})
        console.log(this.state.address)
    }

    componentWillMount() {
        console.log(this.props.user)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.data.firstName) this.setState({loading: false})
    }
    
    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }
        return (
            <div className="homepageComponent">
            <Navbar/>
            <div className="homepageHeader" id="helloHeader">Selam {this.props.user.data.firstName}</div>
            <div className="homepageBox">
            <div className="homepageHeader">Paket Icerigin</div>
            <div className="homepageLine">
                
                <div className="homepageButtons">
                    <button className="homepageButton">Bu ayi atla</button>
                    <button className="homepageButton">Paketimi degistir</button>
                </div>
            </div>
            <div className="homepageHeader">Bilgilerim</div>
            <div className="homepageLine">
                <div className="homepageWords">
                    <div className="homepageWord">{this.props.user.data.address.address1}</div>
                    <div className="homepageWord">{this.props.user.data.address.address2}</div>
                    <div className="homepageWord">{this.props.user.data.address.county}</div>
                    <div className="homepageWord">{this.props.user.data.address.city}l</div>
                    <div className="homepageWord">{this.props.user.data.address.zipCode}</div>
                </div>
                {this.state.addressChange ? <img className="addressForward" alt="addressForward" src={forward} /> : null }
                {this.state.addressChange 
                    ? 
                    <div className="homepageAddressForm">
                        <form className="homepageAddressChange">
                        <input
                        className="homepageAddressInput"
                        type='string'
                        id="address"
                        name='address1'
                        onChange={this.handleAddressChange}
                        placeholder='Adres 1'/>
                        <input
                            className="homepageAddressInput"
                            type='string'
                            id="address"
                            name='address2'
                            onChange={this.handleAddressChange}
                            placeholder='Adres 2'/>
                            
                        <input
                            className="homepageAddressInput"
                            type='string'
                            id="address"
                            name='county'
                            onChange={this.handleAddressChange}
                            placeholder='Ilce'/>
                            
                        <input
                            className="homepageAddressInput"
                            type='string'
                            id="address"
                            name='city'
                            onChange={this.handleAddressChange}
                            placeholder='Il'/>
                            
                        <input
                            className="homepageAddressInput"
                            id="address"
                            type='number'
                            name='zipCode'
                            onChange={this.handleAddressChange}
                            placeholder='Post Kodu'/>
                        </form>
                    </div>
                    : null

                }
                <div className="homepageButtons">
                    {this.state.addressChange 
                        ? <button onClick={this.changeAddress} className="homepageCancel">Iptal</button>
                        : <button onClick={this.changeAddress} className="homepageButton">Adres Degistir</button>
                    }
                    {this.state.addressChange ? <button onClick={this.handleAddressSubmit} className="homepageButton">Degistir</button> : null}
                </div>
            </div>
            <div className="homepageHeader">Odeme</div>
            <div className="homepageLine">
                <div className="cardWhole">
                    <div id="card" className="homepageWord" >Mastercard</div>
                    <div id="card" className="homepageWord" >XXXX-XXXX-XXXX-4190</div>
                    <div id="card" className="homepageWord" >12/18</div>
                </div>
                <div className="homepageButtons">
                    <button className="homepageButton">Kartini Degister</button>
                    <button className="homepageButton">Gecmis Paketlerin</button>
                </div>
            </div>
            <div className="homepageHeader">Iletisim ve Memnuniyetin</div>
            <div className="homepageLine">
            <div className="homepageWords">
                <div className="homepageWord">
                Senin mutlulugunu gercekten onemsiyoruz, ve elimizden geldigince yardim etmek istiyoruz.
                Bizimle konusmak istersen, seni alakasiz bir call-center'a yonlendirmeyecegiz, icimizden biri konusucak seninle;
                bir sikintin varsa cozmeye, hatamiz varsa gonlunu almaya calisacak.
                </div>
                <div className="homepageWord">Bizde musteri memnuniyeti calisani diye bir pozisyon yok.
                Cunku hepimiz senin mutlulugunu onemsiyoruz. Websitesini yapan Doruk veya reklamlari dusunen Mina arayabilir seni, o an kim ilk senin istegini yakalarsa. Biz burda bir aile gibi, her isi beraber yapiyoruz.
                Seni de bizden biri gibi goruyoruz. Istersen yandaki tusa bas, seni arayalim. Sirf sohpet icin bile buradayiz ;)
                </div>
                <div className="homepageWord">
                Yok diyorsan ki, baska dunyalarin insanlariyiz - zorla guzellik olmaz. Bize sans verdigin icin tesekkurler. Bize geri donmek istersen,
                hala buradayiz!
                </div>
            </div>
                <div className="homepageButtons">
                    <button className="homepageButton">Beni Ara</button>
                    <button id="cancel" className="homepageButton">Uyeligimi Dondur</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
  }
  

export default connect(mapStateToProps, { editUserAction })(Homepage)