import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/Item.js';


class Tier extends React {
  constructor (props) {
    super (props);
    this.state = {
      // Some of this will move to Item component
      // But I want all of it together so I can easily see it all at once
      bundleId: 1,
      tier: {
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
    }
  }

  getTierData() {
    let tierId = this.tierId;
    $.ajax({
      method: 'GET',
      url: './itemsIncluded',
      datatype: 'json'
    })
    .done(data => {
      this.setState({

      })
    })
  }


  render() {
    return (
      <div>
        <div className="item">
          <Item />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Tier />, document.getElementById('Tier'));