import React from 'react';
import ReactDOM from 'react-dom';
import Tier from './components/tier.jsx';
import $ from 'jquery';

class Tiers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleId: 1,
      tier1Id: 1,
      tier2Id: 2,
      tier3Id: 3
    }
    this.getTierData = this.getTierData.bind(this);
  }

  componentDidMount() {
    this.getTierData();
  }

  getTierData() {
    let bundleId = this.bundleId;
    $.ajax({
      method: 'GET',
      url: '/tiersIncluded:' + bundleId,
      // url: './tiersIncluded:' + bundleId,
      datatype: 'json',
      success: (data) => {
        this.setState(data);
        console.log('state updated', this.state);
      },
      error: (err) => {
        console.log('err',err);
      }
    })
  }

  render() {
    return (
      <div>
        <Tier tierId={this.state.tier1Id}/>
        <Tier tierId={this.state.tier2Id}/>
        <Tier tierId={this.state.tier3Id}/>
      </div>
    )
  }
}

ReactDOM.render(<Tiers />, document.getElementById('Tiers'));
