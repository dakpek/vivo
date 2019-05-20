import React, { Component } from 'react';
import './products.css';
import Navbar from '../navbar'
import Carousel from 'react-flex-carousel';

import { pad1, pad2, pad3, pad4 } from '../../../assets'

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            duration: {
                short: false,
                long: false,
            },
            intensity: {
                low: false,
                medium: false,
                high: false,
            },
            expansion: {
                standards: false,
                subscriptions: false,
                ingredients: false,
            },
            selection: {
                duration: null,
                intensity: null,
            }
        }
    }


    
    handleSubmit = () => {
        console.log('form submitted')
    }

    handleDuration = (event) => {
        let place = event.target.id;
        let {duration, selection} = {...this.state}
        for ( let x in duration ) {
            if (x !== place) duration[x] = false;
        }
        duration[place] = !duration[place] 
        selection.duration = duration[place];
        this.setState({duration, selection})
    }

    handleIntensity = (event) => {
        let place = event.target.id;
        let {intensity, selection} = {...this.state}
        for ( let x in intensity ) {
            if (x !== place) intensity[x] = false;
        }
        intensity[place] = !intensity[place] 
        selection.intensity = intensity[place];
        this.setState({intensity, selection})
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

    render() {



        return (
            <div className="productsContainer">
            <Navbar/>
            <div className="productsBox">
                <div className="productSection">
                    <div className="formHeader">Uzun & Normal Organik Ped Paketi</div>
                    <form className="productForm" onSubmit={this.handleSubmit}>
                    <div className="formSelectionLabel">Adetiniz kac gun surer?</div>
                    <div className="formSelection">
                        <div 
                        id="short" 
                        className="formSelectBox" 
                        style={this.state.duration.short
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDuration}>
                        3 - 5 </div>
                        <div 
                        id="long" 
                        className="formSelectBox" 
                        style={this.state.duration.long
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleDuration}>
                        6 + </div>
                    </div>
                    <div className="formSelectionLabel">Kanama Miktariniz ne kadar olur?</div>
                    <div className="formSelection">
                        <div 
                        id="low" 
                        className="formSelectBox" 
                        style={this.state.intensity.low
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleIntensity}>
                        Az</div>
                        <div 
                        id="medium" 
                        className="formSelectBox" 
                        style={this.state.intensity.medium
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleIntensity}>
                        Orta</div>
                        <div 
                        id="high" className="formSelectBox" 
                        style={this.state.intensity.high
                        ? {"backgroundColor": "rgba(216, 58, 99, 0.9)", "color": "rgb(247, 244, 239)"} 
                        : null}
                        onClick={this.handleIntensity}>
                        Yogun</div>
                    </div>
                    <div className="formSelectionResult">
                        <div className="formSelectionLabel">Aylik paketiniz:</div>
                        <div className="formSelectionUnit"></div>
                        <div className="formSelectionPrice">
                            <div className="priceItem"></div>
                            <div className="priceCharity"></div>
                        </div>
                    </div>
                        <button type="submit" className="checkout">Odemeye Gecin</button>
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
                    Regl doneminize gore ihtiyaciniz olan tum uzun ve normal pedler
                    bir paket olarak evinize gelir.
                    </div>
                    <div className="feature">
                        <div className="featureSeperator"></div>
                        <div className="featureTitle">
                            <div className="featureTitleWord">Standartlarimiz</div>
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
                            <div className="featureTitleWord">Uyelik Nasil Calisir?</div>
                            <button className="featureTitleExpand"
                            id="subscriptions"
                            onClick={this.handleExpand}
                            >
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
                            <div className="featureTitleWord">Kullanilan malzemeler</div>
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
                    <div className="featureFooter"></div>
                </div>
                </div>
            </div>
        )
    }
}