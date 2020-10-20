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
      }
    }
    this.getTierData = this.getTierData.bind(this);
  }

  componentDidMount() {
    this.setState({
      tierId: this.props.tierId,
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

    let items = this.state.items;

    let itemsArray = [];

    for (let key in items) {
      let itemId = items[key];
      itemsArray.push(<Item key={itemId} itemId={itemId}/>)
    }

    return (
      <div key={this.props.tierId} className="tier">
        Tier {this.state.tierId}
        {itemsArray}
        {/* <Item key={this.state.items.item1} itemId={this.state.items.item1}/> */}
      </div>
    )
  }
}

export default Tier;
