import React from 'react';
import './item.css';
import $ from 'jquery';
import help from './defaulthelpers.jsx';

const itemDetailsUrl = '';
const reviewsUrl = '';

class Item extends React.Component {
  constructor(props) {
    super(props);

    let procgenDetails = this.getDefaults();

    this.state = {
      itemId: this.props.itemId,
      itemName: procgenDetails.itemName,
      itemImage: procgenDetails.itemImage,
      availability: procgenDetails.availability,
      feedback: {
        positiveReviews: procgenDetails.positiveReviews,
        numberOfReviews: procgenDetails.numberOfReviews,
        reviewsFrom: procgenDetails.reviewsFrom,
      }
    }
    this.getItem = this.getItem.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getDefaults = this.getDefaults.bind(this);

    // this.getItem();
    // this.getReviews();
  }

  getDefaults() {
    let itemId = this.props.itemId;

    let defaults = {};

    let firstWordBucket = ['Cloud', 'Final', 'Rabid', 'Desperate', 'Kingdom', 'Blood', 'Frozen', 'Alpha', 'Fate', 'Anonymous', 'Doki Doki', 'Super'];
    let bridgeWordBucket = [' ', ' of ', ' and ', ' or '];
    let lastWordBucket = ['Fantasy', 'Resistance', 'Gear', 'Wombat', 'Clank', 'Loathing', 'Glory'];
    let f = this.numberGenerator(itemId.toString(), firstWordBucket.length - 1);
    let m = this.numberGenerator(itemId.toString(), bridgeWordBucket.length - 1);
    let l = this.numberGenerator(itemId.toString(), lastWordBucket.length - 1);
    let itemName = firstWordBucket[f] + bridgeWordBucket[m] + lastWordBucket[l];
    defaults.itemName = itemName;
    defaults.itemImage = help.gamePhotos[itemId - 1];
    let systems = (itemId % 4);
    defaults.availability = help.gameSystems[systems];
    defaults.positiveReviews = 100 - Math.floor(Math.sqrt(itemId));
    defaults.numberOfReviews = 231 + itemId * 2;
    defaults.reviewsFrom = help.gameSystems[systems];

    return defaults;
  }

  numberGenerator (value, max) {
    var hash = 0;
    for (var i = 0; i < value.length; i++) {
      hash = (hash << 5) + hash + value.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % max;
  }

  getItem() {
    let itemId = this.state.itemId;
    $.ajax({
      method: 'GET',
      url: `${itemDetailsUrl}single/${itemId}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          itemName: data.name,
          itemImage: data.photo_url,
          availability: data.os_options,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  getReviews() {
    let itemId = this.state.itemId;
    $.ajax({
      method: 'GET',
      url: `${reviewsUrl}reviews/${itemId}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          positiveReviews: data.percent,
          numberOfReviews: data.quantity,
          reviewsFrom: data.source,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  render() {
    return (
      <div className="item-view">
        <div key={this.props.itemId} className="item item-box">
          <div className="image-holder">
            <img src={this.state.itemImage} className="image" />
          </div>
          <div className="caption-container">
            {/* ItemId: {this.props.itemId} <br/> */}
            {this.state.itemName} <br/>
            Systems: {this.state.availability} <br/>
            Good Reviews: {this.state.feedback.positiveReviews}% <br/>
            Total Reviews: {this.state.feedback.numberOfReviews} <br/>
            Reviews From: {this.state.feedback.reviewsFrom} <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
