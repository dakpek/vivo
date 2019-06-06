import React, { Component } from 'react';
import {pad5, x} from '../../../assets'
import './item.css';
import { connect } from 'react-redux'
import { cartChangeAction } from '../../../redux/actions/actionCreators'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    deleteItem = () => {
        let cart = this.props.cart;
        cart.pads[this.props.cartItem] = 0
        this.props.cartChangeAction(cart)
    }

    render() {
        return (
            <div className="outercontainer">
            <div className="itemContainer">
                <img alt="itemImage" className="itemImage" src={pad5}/>
                <div className="itemBlock">
                <div className="itemWords">
                    <div className="itemWord">{this.props.padNumber}'li {this.props.padType} Ped</div>
                    <div id="sub" className="itemWord">4 haftada bir</div>
                </div>
                <div className="itemRight">
                    <div className="itemPrice">{this.props.price} TL</div>
                    <div onClick={this.deleteItem} className="itemCancel"><img className="x" alt="x" src={x}/></div>
                </div>
                </div>
            </div>
            <div className="itemSeperator"></div>
            </div>
        )
    }
}


const mapStateToProps = ({ cart }) => {
    return { cart }
  }
  
  
  
  export default connect(mapStateToProps, { cartChangeAction })(Item)