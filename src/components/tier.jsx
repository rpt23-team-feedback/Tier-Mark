import React from 'react';
import Item from './item.jsx';
import $ from 'jquery';
import './tier.css';

// const awsAddress = 'http://3.15.215.14:3101/';
const awsAddress = 'http://localhost:3101/'; // for local testing

class Tier extends React.Component {
  constructor (props) {
    super (props);

    let procgenDetails = this.getDefaults();

    this.state = {
      tierId: this.props.tierId,
      tierCost: this.props.tierCost,
      tierType: this.props.tierType,
      items: {
        item1: procgenDetails.item1,
        item2: procgenDetails.item2,
        item3: procgenDetails.item3,
        item4: procgenDetails.item4,
        item5: procgenDetails.item5,
        item6: procgenDetails.item6,
      }
    }
    this.getTierData = this.getTierData.bind(this);
    this.getDefaults = this.getDefaults.bind(this);
    this.numberGenerator = this.numberGenerator.bind(this);
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
            item3: data.item3 || null,
            item4: data.item4 || null,
            item5: data.item5 || null,
            item6: data.item6 || null,
          }
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  getDefaults() {
    let tierId = this.props.tierId;

    let defaults = { item1: null, item2: null, item3: null, item4: null, item5: null, item6: null };

    defaults.item1 = this.numberGenerator((tierId * 1).toString(), (tierId - 1));
    defaults.item2 = this.numberGenerator((tierId * 2).toString(), (tierId - 1));
    defaults.item3 = this.numberGenerator((tierId * 3).toString(), (tierId - 1));
    defaults.item4 = this.numberGenerator((tierId * 4).toString(), (tierId - 1));
    defaults.item5 = this.numberGenerator((tierId * 5).toString(), (tierId - 1));
    defaults.item6 = this.numberGenerator((tierId * 6).toString(), (tierId - 1));

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


  render() {
    let costText;

    let items = this.state.items;

    let itemsArray = [];

    for (let key in items) {
      let itemId = items[key];
      if (itemId) {
        itemsArray.push(<Item key={itemId} itemId={itemId}/>)
      }
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
        {/* {this.state.tierId}<br /> */}
        {costText}
        {itemsArray}
      </div>
    )
  }
}

export default Tier;
