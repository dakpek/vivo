import React, { Component } from 'react';
import './products.css';
import Navbar from '../navbar'
import Faq from '../faq'
import Reviews from '../reviews'
import Footer from '../footer'
import Carousel from 'react-flex-carousel';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { cartChangeAction, getBoxesAction } from '../../../redux/actions/actionCreators'

import { pad1, pad2, pad3, pad4 } from '../../../assets'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            expansion: {
                standards: false,
                subscriptions: false,
                ingredients: false,
            },
            selection: {
                pads: {
                    normal: null,
                    extra: null,
                    daily: null,
                },
                tampons: {
                    normal: null,
                    super: null
                },
                pills: null,
            }
        }

    }

    

   

    colorBox = (place, number) => {
        if (!this.props.cart.content || this.props.cart.content == null) {
            return false
        }
        let cart = this.props.cart.content;
        
        let pads = cart.pads;

        if (pads[place] == number) {
            return true
        } else {
            return false
        }
    }

    renderNormal = () => {
        if (!this.props.cart.content || this.props.cart.content == null) {
            return null
        }
        let cart = this.props.cart.content;
        let normal = cart.pads.normal;

        if (normal !== 0 && normal !== null) {
            return normal + ' Normal Ped'
        }
    }

    renderExtra = () => {
        if (!this.props.cart.content || this.props.cart.content == null) {
            return null
        }
        let cart = this.props.cart.content;
        let extra = cart.pads.extra;

        if (extra !== 0 && extra !== null) {
            return extra + ' Super Ped'
        }
    }

    renderDaily = () => {
        if (!this.props.cart.content || this.props.cart.content == null) {
            return null
        }
        let cart = this.props.cart.content;
        let daily = cart.pads.daily;

        if (daily !== 0 && daily !== null) {
            return daily + ' Gunluk Ped'
        }
    }

    calculatePrice = () => {
        if (!this.props.cart.content || this.props.cart.content == null) {
            return null
        }
        let price = this.props.cart.totalPrice.toFixed(2);
        console.log(price)

        if (price > 0 && price !== null) {
            return price + ' TL'
        }
    }


    findBox = () => {

        let daily = this.state.selection.pads.daily;
        let extra = this.state.selection.pads.extra;
        let normal = this.state.selection.pads.normal;

        if (daily == null || daily == 'none') daily = 0
        if (extra == null || extra == 'none') extra = 0
        if (normal == null || normal == 'none') normal = 0
    

        let box = this.props.boxes.list.find((el) => {
                return (
                    el.content.pads.daily === daily && 
                    el.content.pads.extra === extra && 
                    el.content.pads.normal === normal
                    )
            })
        return box
    }

    
    handleSubmit = () => {
        console.log('form submitted')
    }

    handleDaily = async (event) => {
        let selection = this.state.selection;
        if (event.target.id == "none") {
            selection.pads.daily = 0
        } else {
            let place = Number(event.target.id);
            selection.pads.daily = place;
        }

        this.setState(selection)
        let box = this.findBox()
        console.log('BOX: ', box)
        await this.props.cartChangeAction(box)
    }
    
    handleNormal = async (event) => {
        let selection = this.state.selection;
        if (event.target.id == "none") {
            selection.pads.normal = 0
        } else {
            let place = Number(event.target.id);
            selection.pads.normal = place;
        }
        await this.setState(selection)
        let box = this.findBox()
        console.log('BOX: ', box)
        await this.props.cartChangeAction(box)
    }
    
    handleExtra = async (event) => {
        let selection = this.state.selection;
        if (event.target.id == "none") {
            selection.pads.extra = 0
        } else {
            let place = Number(event.target.id);
            selection.pads.extra = place;
        }
        await this.setState(selection)
        let box = this.findBox()
        console.log('BOX: ', box)
        await this.props.cartChangeAction(box)
    }
    
    handleExpand = (event) => {
        let place = event.target.id;
        let expansion = this.state.expansion
        for ( let x in expansion ) {
            if (x !== place) expansion[x] = false;
        }
        expansion[place] = !expansion[place];
        this.setState({expansion})
        
    }

    componentDidMount() {
        this.props.getBoxesAction()
    }


    render() {

        return (
            <div className="productsContainer">
            <Navbar/>
            <div className="productsBox">
                <div className="productSection">
                    <div className="formHeader">Aylik ped paketinizi olusturalim</div>
                    <form className="productForm" onSubmit={this.handleSubmit}>
                    <div className="formSelectionLabel">Kac adet normal ped istersin?</div>
                    <div className="formSelection">
                        <div 
                        id="none" 
                        className="formSelectBox" 
                        style={this.colorBox('normal', 0)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        0</div>
                        <div 
                        id="8" 
                        className="formSelectBox" 
                        style={this.colorBox('normal', 8)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        8</div>
                        <div 
                        id="12" 
                        className="formSelectBox" 
                        style={this.colorBox('normal', 12)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        12</div>
                        <div 
                        id="16" 
                        className="formSelectBox" 
                        style={this.colorBox('normal', 16)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        16</div>
                        <div 
                        id="20" 
                        className="formSelectBox" 
                        style={this.colorBox('normal', 20)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        20</div>

                    </div>
                    <div className="formSelectionLabel">Kac adet super ped istersin?</div>
                    <div className="formSelection">
                        <div 
                        id="none" 
                        className="formSelectBox" 
                        style={this.colorBox('extra', 0)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        0</div>
                        <div 
                        id="4" 
                        className="formSelectBox" 
                        style={this.colorBox('extra', 4)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        4</div>
                        <div 
                        id="8" 
                        className="formSelectBox" 
                        style={this.colorBox('extra', 8)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        8</div>
                        <div 
                        id="12" 
                        className="formSelectBox" 
                        style={this.colorBox('extra', 12)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        12</div>
                        <div 
                        id="16" className="formSelectBox" 
                        style={this.colorBox('extra', 16)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        16</div>

                    </div>
                    <div className="formSelectionLabel">Kac adet gunluk ped istersin?</div>
                    <div className="formSelection">
                        <div 
                        id="none" 
                        className="formSelectBox" 
                        style={this.colorBox('daily',0)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        0</div>
                        <div 
                        id="15" 
                        className="formSelectBox" 
                        style={this.colorBox('daily', 15)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        15</div>
                        <div 
                        id="20" 
                        className="formSelectBox" 
                        style={this.colorBox('daily', 20)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        20</div>
                        <div 
                        id="25" 
                        className="formSelectBox" 
                        style={this.colorBox('daily', 25)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        25</div>
                        <div 
                        id="30" 
                        className="formSelectBox" 
                        style={this.colorBox('daily', 30)
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        30</div>

                    </div>
                    <div className="formSelectionResult">
                        <div className="formSelectionLabel">Aylik paketiniz:</div>
                        <div className="formSelectionUnit">
                        {this.renderNormal()}
                        </div>
                        <div className="formSelectionUnit">
                        {this.renderExtra()}
                        </div>
                        <div className="formSelectionUnit">
                        {this.renderDaily()} 
                        </div>
                        <div className="formSelectionPrice">
                            <div className="priceItem">
                                <div className="total">
                                    <div className="totalSeperator"></div>
                                    {this.calculatePrice()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/cekaut" type="submit" className="checkout">Odemeye Gecin</Link>
                    </form>
                </div>
                <div className="productSection">
                <Carousel autoPlayInterval={3000} switcher={true} >
	                <img alt="productPadImage" className="productPadImage" src={pad1}/>
	                <img alt="productPadImage" className="productPadImage" src={pad2}/>
	                <img alt="productPadImage" className="productPadImage" src={pad3}/>
	                <img alt="productPadImage" className="productPadImage" src={pad4}/>
                </Carousel>
                </div>
                <div className="productSection">
                    <div className="featuresHeader">
                    Pedlerimiz 100% organik pamukla yapilir. 
                    Regl doneminize gore ihtiyaciniz olan tum uzun, normal, gunluk pedler
                    bir paket olarak evinize gelir.
                    </div>
                    <div className="feature">
                        <div className="featureSeperator"></div>
                        <div className="featureTitle">
                            <div 
                            onClick={this.handleExpand}
                            id="standards"
                            className="featureTitleWord">Standartlarimiz</div>
                            <button className="featureTitleExpand"
                            id="standards"
                            onClick={this.handleExpand}
                            >
                            {this.state.expansion.standards ? "-" : "+"}
                            </button>
                        </div>
                        <div className="featureExplanation"
                            style={this.state.expansion.standards
                                ? {"display": "inline"}
                                : {"display": "none"}}
                        >
                            <div className="feat">Klor yikama yapilmaz</div>
                            <div className="feat">Glifosat artigi icermez</div>
                            <div className="feat">Koku ve sentetik boya kullanilmaz</div>
                            <div className="feat">Polyester ve sentetik materyal ile islenmez</div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="featureSeperator"></div>
                        <div className="featureTitle">
                            <div 
                            onClick={this.handleExpand}
                            id="subscriptions"
                            className="featureTitleWord">Uyelik Nasil Calisir?</div>
                            <button className="featureTitleExpand"
                            id="subscriptions"
                            onClick={this.handleExpand}>
                            {this.state.expansion.subscriptions ? "-" : "+"}
                            </button>
                        </div>
                        <div className="featureExplanation"
                            style={this.state.expansion.subscriptions
                                ? {"display": "inline"}
                                : {"display": "none"}}
                        >
                            <div className="feat">Regl doneminize gore size hazirlanan paketi siparis edin</div>
                            <div className="feat">Paketten memnun kalirsaniz her ay paketleriniz kapiniza teslim edilir</div>
                            <div className="feat">Ilk ay 2 paket alirsiniz, bunlardan biri evinizde beklenmedik bir duruma karsi stok gorevini gorur</div>
                            <div className="feat">Istediginiz zaman paketinizi atlayabilir, degistirebilir veya uyeliginizi iptal edebilirsiniz</div>
                            <div className="feat">Her yeni paketten 2 gun once hatirlatma e-maili alirsiniz</div>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="featureSeperator"></div>
                        <div className="featureTitle">
                            <div 
                            onClick={this.handleExpand} 
                            id="ingredients"
                            className="featureTitleWord">Kullanilan malzemeler</div>
                            <button className="featureTitleExpand"
                            id="ingredients"
                            onClick={this.handleExpand}
                            >
                            {this.state.expansion.ingredients ? "-" : "+"}
                            </button>
                        </div>
                        <div className="featureExplanation"
                            style={this.state.expansion.ingredients
                                ? {"display": "inline"}
                                : {"display": "none"}}
                        >
                            <div className="feat">GOTS sertifikali organik pamuk</div>
                            <div className="feat">Emici ve nefes alabilir yuzey dizayni</div>
                            <div className="feat">Bitki bazli yapistiricilar</div>
                            <div className="feat">Dogal paketleme</div>
                        </div>
                    </div>
                    <div className="featureCertifications">
                    </div>
                </div>
                </div>
            <Reviews/>
            <Faq/>
            <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ cart, boxes }) => {
    return { cart, boxes }
  }

export default connect(mapStateToProps, { cartChangeAction, getBoxesAction })(Products)