import React from 'react';
import Item from './item.jsx';
import $ from 'jquery';
import './tier.css';

class Tier extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tierId: this.props.tierId,  // from this service
      tierCost: 1,  // minimum cost
      items: {
        item1: 1,
        item2: 2,
        item3: 3,
        item4: 4,
        item5: 5,
        item6: 6
      }
    }
    this.getTierData = this.getTierData.bind(this);
  }

  componentDidMount() {
    this.setState({
      tierId: this.props.tierId
    });
    this.getTierData();
  }

  getTierData() {
    let tierId = this.state.tierId;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3101/itemsIncluded/' + tierId,
      datatype: 'json',
      success: (data) => {
        for (let i = 0; i < data.length; i++) {
          this.setState({
            item1: data.item1,
            item2: data.item2,
          })
        }
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }


  render() {

    const items = this.state.items;

    let itemsArray = [];

    for (let key in items) {
      let itemId = items[key];
      itemsArray.push(<Item key={itemId} itemId={itemId}/>)
    }

    return (
      <div>
        <div key={this.props.tierId} className="tier">
          Tier {this.state.tierId}
          {/* {itemsArray} */}
        </div>
      </div>
    )
  }
}

export default Tier;
