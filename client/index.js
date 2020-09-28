import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Tier extends React {
  constructor (props) {
    super (props);
    this.state = {
      // TODO items in state
      bundleId: 1,
      tier1: {
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
            itemId: 2,  // from Tiers
            itemName: 'game 2', // from Item service
            itemImage: '',  // from Item service
            availability: '', // from System Requirements service
            feedback: {
              positiveReviews: 76,  // from Reviews service
              numberOfReviews: 9652, // from Reviews service
              reviewsFrom: 'Steam'  // from Reviews service
            }
          }
        }
      },
      tier2: {
        tierId: 2,  // from this service
        tierCost: 5,  // from Top Contributors service
        items: {}
      },
      tier3: {
        tierId: 2,  // from this service
        tierCost: 12,  // from this service
        items: ''
      }
    }
  }



  render() {
    <div>
      Some stuff
    </div>
  }
}

ReactDOM.render(<Tier />, document.getElementById('Tier'));