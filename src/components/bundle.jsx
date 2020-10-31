import React from 'react';
import Tier from './tier.jsx';
import $ from 'jquery';
import './index.css';

// const awsAddress = 'http://3.15.215.14:3101/';
const awsAddress = 'http://localhost:3101/'; // for local testing

class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleId: parseInt(this.props.match.params.bundleId),
      tier1Id: parseInt((this.props.match.params.bundleId - 1) * 3 + 1),
      tier1Cost: 1,
      tier2Id: parseInt((this.props.match.params.bundleId - 1) * 3 + 2),
      tier2Cost: 3, // from Top Contributors
      tier3Id: parseInt((this.props.match.params.bundleId - 1) * 3 + 3),
      tier3Cost: ((Math.floor(this.props.match.params.bundleId / 25) + 1) * 5),
    }
    this.getBundleData = this.getBundleData.bind(this);
    // this.getBundleData();
  }

  getBundleData() {
    var bundleId = this.state.bundleId;
    if (bundleId < 1 || bundleId > 100) {
      return 1;
    }

    $.ajax({
      method: 'GET',
      url: `${awsAddress}tiersIncluded/${bundleId}`,
      datatype: 'json',
      success: (data) => {
        this.setState({
          bundleId: bundleId,
          tier1Id: data.tier1Id,
          tier2Id: data.tier2Id,
          tier3Id: data.tier3Id,
          tier3Cost: data.tier3Cost,
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  render() {
    return (
        <div className="tiers-container">
          Bundle {this.state.bundleId}
          <Tier key={this.state.tier1Id} tierId={this.state.tier1Id} tierCost={this.state.tier1Cost} tierType="1"/>
          <Tier key={this.state.tier2Id} tierId={this.state.tier2Id} tierCost={this.state.tier2Cost} tierType="2"/>
          <Tier key={this.state.tier3Id} tierId={this.state.tier3Id} tierCost={this.state.tier3Cost} tierType="3"/>
        </div>
    )
  }

};

export default Bundle;
