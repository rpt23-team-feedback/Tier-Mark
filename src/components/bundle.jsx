import React from 'react';
import Tier from './tier.jsx';
import $ from 'jquery';
import './index.css';

const awsAddress = 'http://3.15.215.14:3101/';

class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleId: parseInt(this.props.match.params.bundleId),
      tier1Id: 1,
      tier1Cost: 1,
      tier2Id: 2,
      tier2Cost: 3, // from Top Contributors
      tier3Id: 3,
      tier3Cost: 25,
    }
    this.getBundleData = this.getBundleData.bind(this);
  }

  componentDidMount() {
    this.getBundleData();
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
