import React from 'react';
import Item from './item.jsx';
import $ from 'jquery';

class Tier extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      // Some of this will move to Item component
      // But I want all of it together so I can easily see it all at once
      tierId: 1,  // from this service
      tierCost: 1,  // minimum cost
      items: {
        item1: {
          itemId: 1,  // from Tiers
          itemName: 'game 1', // from Item service
          itemImage: '',  // from Item service
          availability: '', // from System Requirements service
          feedback: {
            positiveReviews: 90,  // from Reviews service
            numberOfReviews: 526, // from Reviews service
            reviewsFrom: 'Steam'  // from Reviews service
          }
        },
        item2: {
          itemId: 2,  // from this service
          itemName: 'game 2', // from Item service
          itemImage: '',  // from Item service
          availability: '', // from System Requirements service
          feedback: {
            positiveReviews: 76,  // from Reviews service
            numberOfReviews: 9652, // from Reviews service
            reviewsFrom: 'Steam'  // from Reviews service
          }
        }
        // Will need to extend to max number of items later
      }
    }
    this.getTierData = this.getTierData.bind();
  }

  componentDidMount() {
    // this.setState({
    //   tierId: this.props.tierId
    // });
    // this.getTierData();
  }

  getTierData() {
    let tierId = this.state.tierId;
    $.ajax({
      method: 'GET',
      url: '/itemsIncluded/:' + tierId,
      datatype: 'json',
      success: (data) => {
        this.setState(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }


  render() {
    return (
      <div>
        <div className="item">
          {/* Tier {this.state.tierId} */}
          {/* <Item itemId={this.state.items.item1}/> */}
          {/* <Item itemId={this.state.items.item2}/> */}
        </div>
      </div>
    )
  }
}

export default Tier;
