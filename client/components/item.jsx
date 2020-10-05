import React from 'react';

class Item extends React.Component {
  constructor(props) { //
    super(props);
    this.state = {
      itemId: 1,  // from Tiers
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
    this.getItem();
    this.getAvailability();
    this.getReviews();
  }

  getItem() {
    // This will call out to Item service
  }

  getAvailability() {
    // This will call out to System Requirements service
  }

  getReviews() {
    // This will call out to Reviews service
  }

  render() {
    return (
      <div className="item-view">
        WIP
      </div>
    )
  }
}

export default Item;
