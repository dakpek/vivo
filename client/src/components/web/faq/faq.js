import React, { Component } from 'react'
import './faq.css'
import {arrow} from '../../../assets';

class Faq extends Component {
  constructor(props){
    super(props);
    this.state = {
        answer1IsOpen: false,
        answer2IsOpen: false,
        answer3IsOpen: false,
        answer4IsOpen: false,
        answer5IsOpen: false,
        answer6IsOpen: false,
        answer7IsOpen: false,
        answer8IsOpen: false,
        answer9IsOpen: false,
        answer10IsOpen: false
    }
  }

  render(){
    return(
      <div className='faq-container'>
        <div className="faqTitle">
        <div className='faq-subtitle'>vat di </div>
        <div className='faq-title'>FAQ?</div>
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer1IsOpen:!this.state.answer1IsOpen})}}
          style={this.state.answer1IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>What's the mission of Localties?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer1IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer1IsOpen:!this.state.answer1IsOpen})}}
            />
          </div>
          {this.state.answer1IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Our mission is to support local communities
                  through strengthening local economies & counter some of the negative
                  outcomes of globalization. When you shop at small local businesses
                  they also tend to shop at other local businesses. This creates a
                  virtuous circle of spending, empowering the entire community.
                  In contrast, shopping at large multi-national chains tend to siphon
                  money away from local communities, creating economic "droughts". There's
                  even a word for this in economics: <i>the Walmart efffect</i></p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer2IsOpen:!this.state.answer2IsOpen})}}
          style={this.state.answer2IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>What's the economics of all this?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer2IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer2IsOpen:!this.state.answer2IsOpen})}}
            />
          </div>
          {this.state.answer2IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Each star is worth 10 cents, and customers get
                  1 star for every dollar they spend in local stores accross the
                  neighborhood. Essentialy, the network offers a 10% discount for shopping
                  locally.</p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer3IsOpen:!this.state.answer3IsOpen})}}
          style={this.state.answer3IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>What can I spend these starz for?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer3IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer3IsOpen:!this.state.answer3IsOpen})}}
            />
          </div>
          {this.state.answer3IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Local businesses decide on rewards they'd like
                  to offer to local customers and how many star each reward costs.
                  After that, all you need to do is to collect enough starz, and start
                  spending.</p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer4IsOpen:!this.state.answer4IsOpen})}}
          style={this.state.answer4IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>How do I earn starz?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer4IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer4IsOpen:!this.state.answer4IsOpen})}}
            />
          </div>
          {this.state.answer4IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  When you make a purchase at a store, we identify
                  you with the last 4 numbers of your credit card. All you have to do is
                  claim your starz from the app!</p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer5IsOpen:!this.state.answer5IsOpen})}}
          style={this.state.answer5IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>How do I spend my starz?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer5IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer5IsOpen:!this.state.answer5IsOpen})}}
            />
          </div>
          {this.state.answer5IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Easy! You can see your star balance from the
                  sidebar. Look through the menus of each shop profile, and if you
                  have starz for something you like, take it!</p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer6IsOpen:!this.state.answer6IsOpen})}}
          style={this.state.answer6IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>Can I get my starz from one shop, but spend them
              someplace else?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer6IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer6IsOpen:!this.state.answer6IsOpen})}}
            />
          </div>
          {this.state.answer6IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Of course! That's the whole point! Businesses
                  put down money for each star they give away, so when they accept starz
                  from other businesses, it's no different than accepting dollars! All
                  they need to do is exchange the starz you spend with them back with us.</p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer7IsOpen:!this.state.answer7IsOpen})}}
          style={this.state.answer7IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>How does the exchange of starz between shops and
              Localties work?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer7IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer7IsOpen:!this.state.answer7IsOpen})}}
            />
          </div>
          {this.state.answer7IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Stores contact us and we send them a check! No
                  fee, no hassle!</p>
              </div>
            : null
          }
          </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer8IsOpen:!this.state.answer8IsOpen})}}
          style={this.state.answer8IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>How do businesses do the accounting of these
              starz?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer8IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer8IsOpen:!this.state.answer8IsOpen})}}
            />
          </div>
          {this.state.answer8IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Localties can provide businesses with the history
                  of all the transactions made with starz. If you or your accountant has
                  other, specific needs - don't hesitate to contact us.</p>
              </div>
            : null
          }
        </div>
        <div
          className='question'
          onClick={()=> {this.setState({answer9IsOpen:!this.state.answer9IsOpen})}}
          style={this.state.answer9IsOpen
            ? {"backgroundColor": "rgba(245, 127, 133, 0.5)", "border":"1.5px dashed rgb(30,30,30)"}
            : {"backgroundColor": "rgba(255, 255, 255)"}
            }>
          <div className='title'>
            <div className='title'>How do I use the app?</div>
            <img
              alt='arrow'
              className='arrow'
              style={this.state.answer9IsOpen
                ? {"transform": "rotate(270deg)"}
                : {"transform": "rotate(90deg)"}
                }
              src={arrow}
              onClick={()=> {this.setState({answer9IsOpen:!this.state.answer9IsOpen})}}
            />
          </div>
          {this.state.answer9IsOpen
            ? <div className='answer'>
                <p className='answer'>
                  Right now, it's a website you log onto through
                  your mobile browser (Safari, Chrome, doesn't matter..). We're also
                  working on an app for your phone, soon ;)</p>
              </div>
            : null
          }
        </div>
      </div>
    )
  }
}

export default Faq
