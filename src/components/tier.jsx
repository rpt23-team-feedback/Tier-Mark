import React from 'react';
import Item from './item.jsx';
import $ from 'jquery';
import './tier.css';

// const awsAddress = 'http://3.15.215.14:3101/';
const awsAddress = 'http://localhost:3101/'; // for local testing

class Tier extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tierId: this.props.tierId,
      tierCost: this.props.tierCost,
      items: {
        item1: 1,
        item2: 2,
      }
    }
    this.getTierData = this.getTierData.bind(this);

    this.setState({
      tierId: this.props.tierId,
      tierCost: this.props.tierCost,
      tierType: this.props.tierType,
    });
    // this.getTierData();
  }

  getTierData() {
    let tierId = this.state.tierId;
    $.ajax({
      method: 'GET',
      url: `${awsAddress}itemsIncluded/${tierId}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          items: {
            item1: data.item1,
            item2: data.item2,
          }
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }


  render() {

    let costText = this.state.tierCost;

    let items = this.state.items;

    let itemsArray = [];

    for (let key in items) {
      let itemId = items[key];
      itemsArray.push(<Item key={itemId} itemId={itemId}/>)
    }

    if (this.state.tierType === '1') {
      costText = 'PAY $1 TO UNLOCK!';
    } else if (this.state.tierType === '2') {
      costText = `PAY $${this.state.tierCost} OR MORE TO UNLOCK!`;
    } else if (this.state.tierType === '3') {
      costText = `PAY $${this.state.tierCost} OR MORE TO ALSO UNLOCK!`;
    }

    return (
      <div key={this.props.tierId} className="tier">
        {costText}
        {itemsArray}
        {/* <Item key={this.state.items.item1} itemId={this.state.items.item1}/> */}
      </div>
    )
  }
}

export default Tier;
