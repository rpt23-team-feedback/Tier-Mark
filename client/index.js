import React from 'react';
import ReactDOM from 'react-dom';
import Tier from './components/tier.js';

class Tiers extends React {
  constructor(props) {
    super(props);
    this.state = {
      bundleId = 1,
      tier1Id = 1,
      tier2Id = 2,
      tier3Id = 3
    }
  }

  getTierData() {
    let tierId = this.tierId;
    $.ajax({
      method: 'GET',
      url: './tiersIncluded',
      datatype: 'json'
    })
    .done(data => {
      console.log(data);
      this.setState({
        //TODO
      })
    })
  }

  render() {
    return (
      <div>
        <Tier />
      </div>
    )
  }
}

ReactDOM.render(<Tiers />, document.getElementById('Tiers'));