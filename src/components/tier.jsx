import React from 'react';
import Item from './item.jsx';
import $ from 'jquery';
import './tier.css';

class Tier extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tierId: this.props.tierId,  // from this service
      tierCost: this.props.tierCost,
      items: {
        item1: 1,
        item2: 2,
      }
    }
    this.getTierData = this.getTierData.bind(this);
  }

  componentDidMount() {
    this.setState({
      tierId: this.props.tierId,
      tierCost: this.props.tierCost,
      tierType: this.props.tierType,
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

    var costText = this.state.tierCost;

    var items = this.state.items;

    var itemsArray = [];

    for (var key in items) {
      var itemId = items[key];
      itemsArray.push(<Item key={itemId} itemId={itemId}/>)
    }

    if (this.state.tierType === "1") {
      costText = "PAY $1 TO UNLOCK!";
    } else if (this.state.tierType === "2") {
      costText = "PAY $" + this.state.tierCost + " OR MORE TO UNLOCK!";
    } else if (this.state.tierType === "3") {
      costText = "PAY $" + this.state.tierCost + " OR MORE TO ALSO UNLOCK!";
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
