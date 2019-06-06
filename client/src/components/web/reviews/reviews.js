import React, { Component } from 'react';
import axios from 'axios';
import './reviews.css';
import StarRatingComponent from 'react-star-rating-component';
import {reviewBackground} from '../../../assets'
import Interval from 'react-interval-rerender'

export default class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            picked: {
                1: 0,
                2: 1,
                3: 2,
                4: 3,
                5: 4
            },
            started: false

        }
    }


    async componentWillMount() {
        let reviews = await axios.get('http://localhost:3001/reviews');
        await this.setState({reviews: reviews.data})
        console.log(this.state.reviews)
    }


renderReview = () => {
    
    let length = this.state.reviews.length - 1;
    let num = Math.floor(Math.random() * length);
        return (
                <div className="reviewBox">
                    <div className="reviewLeft">
                        <div className="reviewPerson">
                        {
                            this.state.reviews.length > 1
                            ? this.state.reviews[num].author
                            : null
                        }
                        </div>
                        <div className="reviewStars">
                        {this.state.reviews.length > 1
                        ? <StarRatingComponent 
                        name={'review'}
                        value={this.state.reviews[num].stars}
                        number={5}
                        />
                        : null
                        }
                        </div>
                    </div>
                    <div className="reviewRight">
                        <div className="reviewTitle">
                        {
                            this.state.reviews.length > 1
                            ? this.state.reviews[num].title
                            : null
                        }</div>
                        <div className="reviewBody">
                        {
                            this.state.reviews.length > 1
                            ? this.state.reviews[num].review
                            : null
                        }
                        </div>
                    </div>
                </div>)
    }

    render() {
        return (
            <div className="reviewsContainer">
                <div className="reviewsHeader">
                    <img alt="reviewsBackground" className="reviewsBackground" src={reviewBackground} />
                    <div className="reviewsHeaderWords">Diger kadinlar ne diyor?</div>
                </div>
                <div className="review1"><Interval delay={7200}>{this.renderReview}</Interval></div>
                <div className="reviewSeperator"></div>
                <div className="review2"><Interval delay={6000}>{this.renderReview}</Interval></div>
                <div className="reviewSeperator"></div>
                <div className="review3"><Interval delay={7500}>{this.renderReview}</Interval></div>
                <div className="reviewSeperator"></div>
                <div className="review4"><Interval delay={7100}>{this.renderReview}</Interval></div>
                <div className="reviewSeperator"></div>
                </div>
            // </div>
        )
    }
}