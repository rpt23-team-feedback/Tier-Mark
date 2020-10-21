import React from 'react';
import './item.css';
import $ from 'jquery';

const itemDetailsUrl = 'http://localhost:3200/';

class Item extends React.Component {
  constructor(props) { //
    super(props);
    this.state = {
      itemId: this.props.itemId,
      itemName: 'game 1', // from Item service
      itemImage: '',  // from Item service
      availability: '', // from System Requirements service
      feedback: {
        positiveReviews: 90,  // from Reviews service
        numberOfReviews: 526, // from Reviews service
        reviewsFrom: 'Steam'  // from Reviews service
      }
    }
    this.getItem = this.getItem.bind(this);
    this.getAvailability = this.getAvailability.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount  () {
    this.setState({
      itemId: this.props.itemId
    });
    this.getItem();
    this.getAvailability();
    this.getReviews();
  }

  getItem() {
    let itemId = this.state.itemId;
    $.ajax({
      method: 'GET',
      url: itemDetailsUrl + 'single/' + itemId,
      datatype: 'json',
      success: (data) => {
        console.log('game data received', data);
        this.setState({
          //
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })

    // Fake data generator in case Item service unresponsive
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
          ItemId: {this.props.itemId} <br/>
          {/* Name: {this.state.itemName} <br/> */}
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
