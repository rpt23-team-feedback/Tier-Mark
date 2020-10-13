import React from 'react';
import Item from './item.jsx';
import $ from 'jquery';

class Tier extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tierId: 1,  // from this service
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
    this.getTierData = this.getTierData.bind();
  }

  componentDidMount() {
    this.setState({
      tierId: this.props.tierId
    });
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

    const items = this.state.items;

    let itemsArray = [];

    for (let key in items) {
      let itemId = items[key];
      itemsArray.push(<Item key={itemId} itemId={itemId}/>)
    }

    return (
      <div>
        <div className="tier ${this.state.tierId">
          Tier {this.state.tierId}
          {itemsArray}
        </div>
      </div>
    )
  }
}

export default Tier;
