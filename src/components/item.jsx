import React from 'react';
import './item.css';
import $ from 'jquery';
import help from './defaulthelpers';

const itemDetailsUrl = '';

class Item extends React.Component {
  constructor(props) { //
    super(props);

    let procgenDetails = this.getDefaults();

    this.state = {
      itemId: this.props.itemId,
      itemName: procgenDetails.itemName, // from Item service
      itemImage: procgenDetails.itemImage,  // from Item service
      availability: 'Steam', // from System Requirements service
      feedback: {
        positiveReviews: 90,  // from Reviews service
        numberOfReviews: 526, // from Reviews service
        reviewsFrom: 'Steam'  // from Reviews service
      }
    }
    this.getItem = this.getItem.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getDefaults = this.getDefaults.bind(this);

    this.getItem();
    // this.getAvailability();
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


    return defaults;
  }

  numberGenerator (value, max) {
    var hash = 0;
    for (var i = 0; i < value.length; i++) {
      hash = (hash << 5) + hash + value.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
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
        console.log('game data received', data);
        this.setState({
          itemName = data.name,
          itemImage = data.photo_url,
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })

  }

  getAvailability() {
    // This will call out to System Requirements service

    // Fake data generator in case System Requirements service unresponsive
  }

  getReviews() {
    // This will call out to Reviews service

    // Fake data generator in case Reviews service unresponsive
  }

  render() {
    return (
      <div className="item-view">
        <div key={this.props.itemId} className="item">
          {/* ItemId: {this.props.itemId} <br/> */}
          {this.state.itemName} <br/>
          {/* Systems: {this.state.availability} <br/> */}
          {/* Good Reviews: {this.state.feedback.positiveReviews}% <br/> */}
          {/* Total Reviews: {this.state.feedback.numberOfReviews} <br/> */}
          {/* Reviews From: {this.state.feedback.reviewsFrom} <br/> */}
        </div>
      </div>
    )
  }
}

export default Item;
