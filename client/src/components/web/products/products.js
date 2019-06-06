import React, { Component } from 'react';
import './products.css';
import Navbar from '../navbar'
import Faq from '../faq'
import Reviews from '../reviews'
import Footer from '../footer'
import Carousel from 'react-flex-carousel';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { cartChangeAction, getCatalogAction } from '../../../redux/actions/actionCreators'

import { pad1, pad2, pad3, pad4 } from '../../../assets'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                pills: "",
            },
            price: null
        }
    }


    initializePage = () => {
        if (
            this.props.cart.pads.extra !== 0 ||
            this.props.cart.pads.normal !== 0 ||
            this.props.cart.pads.daily !== 0 
            ) {
                let cart = this.props.cart.pads;
                let selection = this.state.selection;
                selection.pads = cart;
                this.setState({selection})
            }
    }







    
    handleSubmit = () => {
        console.log('form submitted')
    }

    handleDaily = (event) => {
        let selection = this.state.selection;
        if (event.target.id == "none") {
            selection.pads.daily = null
        } else {
            let place = Number(event.target.id);
            selection.pads.daily = place;
        }
        this.props.cartChangeAction(selection)
        this.setState(selection)
    }

    handleNormal = (event) => {
        let selection = this.state.selection;
        if (event.target.id == "none") {
            selection.pads.normal = null
        } else {
            let place = Number(event.target.id);
            selection.pads.normal = place;
        }
        this.props.cartChangeAction(selection)
        this.setState(selection)
    }

    handleExtra = (event) => {
        let selection = this.state.selection;
        if (event.target.id == "none") {
            selection.pads.extra = null
        } else {
            let place = Number(event.target.id);
            selection.pads.extra = place;
        }
        this.props.cartChangeAction(selection)
        this.setState(selection)
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

    calculatePrice = () => {
        let daily = this.state.selection.pads.daily;
        let extra = this.state.selection.pads.extra;
        let normal = this.state.selection.pads.normal;

        if (daily == null || daily == "none") {
            if (extra == null || extra == "none") {
                if (normal == null || normal == "none") {
                    return 0
                } else {
                    let price = normal * 0.25 + 4 + 2
                    return price
                }
            } else {
                if (normal == null || normal == "none") {
                    let price = extra * 0.30 + 4 + 2
                    return price
                } else {
                    let price = extra * 0.30 + normal * 0.25 + 4 + 2
                    return price
                }
            }
        } else {
            if (extra == null || extra == "none") {
                if (normal == null || normal == "none") {
                    let price = daily * 0.2 + 4 + 2
                    return price
                } else {
                    let price = normal * 0.25 + daily * 0.2 + 4 + 2
                    return price
                }
            } else {
                if (normal == null || normal == "none") {
                    let price = extra * 0.30 + daily * 0.2 + 4 + 2
                    return price
                } else {
                    let price = extra * 0.30 + normal * 0.25 +  daily * 0.2 + 4 + 2
                    return price
                }
            }
        }
        
        
        
    }

    calculateCharity = () => {
        let price = this.calculatePrice()
        if (price == null) return null;
        return (price/10).toFixed(2) * 0.15
    }

    async componentDidMount() {
        await this.props.getCatalogAction()
        this.initializePage()
    }
    
    componentWillReceiveProps(nextProps) {
        let cart = nextProps.cart;
        let selection = this.state.selection;
        selection.pads = cart.pads;
        this.setState({selection})
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
                        style={this.state.selection.pads.normal == 0 || this.state.selection.pads.normal == null
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        0</div>
                        <div 
                        id="8" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.normal == 8
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        8</div>
                        <div 
                        id="12" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.normal == 12
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        12</div>
                        <div 
                        id="16" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.normal == 16
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleNormal}>
                        16</div>
                        <div 
                        id="20" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.normal == 20
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
                        style={this.state.selection.pads.extra == 0 || this.state.selection.pads.extra == null
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        0</div>
                        <div 
                        id="4" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.extra == 4
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        4</div>
                        <div 
                        id="8" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.extra == 8
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        8</div>
                        <div 
                        id="12" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.extra == 12
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleExtra}>
                        12</div>
                        <div 
                        id="16" className="formSelectBox" 
                        style={this.state.selection.pads.extra == 16
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
                        style={this.state.selection.pads.daily == 0 || this.state.selection.pads.daily == null
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        0</div>
                        <div 
                        id="15" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.daily == 15
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        15</div>
                        <div 
                        id="20" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.daily == 20
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        20</div>
                        <div 
                        id="25" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.daily == 25
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        25</div>
                        <div 
                        id="30" 
                        className="formSelectBox" 
                        style={this.state.selection.pads.daily == 30
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDaily}>
                        30</div>

                    </div>
                    <div className="formSelectionResult">
                        <div className="formSelectionLabel">Aylik paketiniz:</div>
                        <div className="formSelectionUnit">
                        {this.state.selection.pads.normal == null || this.state.selection.pads.normal == 0
                            ? null
                            : `${this.state.selection.pads.normal} Normal Ped`
                        }
                        </div>
                        <div className="formSelectionUnit">
                        {this.state.selection.pads.extra == null || this.state.selection.pads.extra == 0
                            ? null
                            : `${this.state.selection.pads.extra} Super Ped`
                        }
                        </div>
                        <div className="formSelectionUnit">
                        {this.state.selection.pads.daily == null || this.state.selection.pads.daily == 0
                            ? null
                            : `${this.state.selection.pads.daily} Gunluk Ped`
                        } 
                        </div>
                        <div className="formSelectionPrice">
                            <div className="priceItem">
                            {
                            (this.state.selection.pads.daily == null || this.state.selection.pads.daily == 0) &&
                            (this.state.selection.pads.normal == null || this.state.selection.pads.normal == 0) &&
                            (this.state.selection.pads.extra == null || this.state.selection.pads.extra == 0)
                                ? <div></div>
                                : <div className="total">
                                <div className="totalSeperator"></div>
                                {this.calculatePrice()} TL
                                </div>
                            }
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

const mapStateToProps = ({ cart }) => {
    return { cart }
  }

export default connect(mapStateToProps, { cartChangeAction, getCatalogAction })(Products)