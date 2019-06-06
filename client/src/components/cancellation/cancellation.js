import React, { Component } from 'react';
import './cancellation.css';
import SideMenu from '../menu'
import { withFirebase } from '../Firebase';
import {compose} from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import REASONS from './reasons'

export class CancellationBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reason1: false,
            reason2: false,
            reason3: false,
            reason4: false,
            reason5: false,
        }
    }


    handleClick = (event) => {
        let box = event.target.name;
        if (this.state[box] === true) {
            event.target.removeAttribute('checked');
            this.setState({
                [event.target.name]: false
            })

        } else {
            event.target.setAttribute('checked', true);
            this.setState({
                [event.target.name]: true
            })
        }
    }

    handleCancellation = (event) => {
        event.preventDefault()
        let reason = ""
        let state = this.state;
        let keys = Object.keys(state)

        let counter = 1;

        for (let key of keys) {

            if (state[key]) {
                reason = reason + ' || ' + REASONS[counter]
            }
        counter = counter + 1;
        }
        

        this.props.firebase.cancelSubscription(reason)
        
    }



    render() {
        
        return (
            <div className="cancellationContainer">
            <SideMenu />
                <div className="cancellation-hello">Gittigin icin uzgunuz</div>
                <div className="cancellation-hello2">neden gittigini bizimle paylasirmisin?</div>
                <form className="cancellation-form" onSubmit={this.handleCancellation}>
                <div className="cancellationCheckboxContainer">
                    <input
                        className={"cancellationCheckbox"}
                        type='checkbox'
                        name='reason1'
                        value="reason1"
                        onClick={this.handleClick}
                        />
                    <label className="cancellationLabel" for="reason1">{REASONS[1]}</label>
                </div>
                <div className="cancellationCheckboxContainer">
                    <input
                        className={"cancellationCheckbox"}
                        type='checkbox'
                        name='reason2'
                        value="reason2"
                        onClick={this.handleClick}
                        />
                    <label className="cancellationLabel" for="reason2">{REASONS[2]}</label>
                </div>
                <div className="cancellationCheckboxContainer">
                    <input
                        className={"cancellationCheckbox"}
                        type='checkbox'
                        name='reason3'
                        value="reason3"
                        onClick={this.handleClick}
                        />
                    <label className="cancellationLabel" for="reason3">{REASONS[3]}</label>
                </div>
                <div className="cancellationCheckboxContainer">
                    <input
                        className={"cancellationCheckbox"}
                        type='checkbox'
                        name='reason4'
                        value="reason4"
                        onClick={this.handleClick}
                        />
                    <label className="cancellationLabel" for="reason4">{REASONS[4]}</label>
                </div>
                <div className="cancellationCheckboxContainer">
                    <input
                        className={"cancellationCheckbox"}
                        type='checkbox'
                        name='reason5'
                        value="reason5"
                        onClick={this.handleClick}
                        />
                    <label className="cancellationLabel" for="reason5">{REASONS[5]}</label>
                </div>
                <div className="cancellationCheckboxContainer">
                    <input
                        className={"cancellationCheckbox"}
                        type='checkbox'
                        name='reason6'
                        value="reason6"
                        onClick={this.handleClick}
                        />
                    <label className="cancellationLabel" for="reason6">Diger</label>
                </div>
                        <button                                      
                        type='submit'
                        className="cancellation-submit">
                        Uyeligimi Iptal Et
                        </button>
                        <Link to='/' className='cancellation-goBack'>Geri</Link>
                </form>
            </div>
        )
    }
    
}

//firebase stuff

const CancellationFirebase = compose(
    withRouter,
    withFirebase,
    )(CancellationBase);


    
const Cancellation = () => (
        <div>
            <CancellationFirebase />
        </div>
)

export default Cancellation;