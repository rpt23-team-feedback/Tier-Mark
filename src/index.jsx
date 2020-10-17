import React from 'react';
import ReactDOM from 'react-dom';
import Tier from './components/tier.jsx';
import $ from 'jquery';
import './index.css';

class Tiers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bundleId: 1,
      tier1Id: 1,
      tier2Id: 2,
      tier3Id: 3,
    }
    this.getBundleData = this.getBundleData.bind(this);
  }

  componentDidMount() {
    this.getBundleData();
  }

  getBundleData() {
    var url = new URL(window.location);
    var bundleId = url.searchParams.get('bundle');
    $.ajax({
      method: 'GET',
      url: '/tiersIncluded/' + bundleId,
      datatype: 'json',
      success: (data) => {
        this.setState({
          bundleId: bundleId,
          tier1Id: data.tier1Id,
          tier2Id: data.tier2Id,
          tier3Id: data.tier3Id,
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  render() {
    return (
      <div className="Tiers-container">
        Bundle {this.state.bundleId}
        <Tier key={this.state.tier1Id} tierId={this.state.tier1Id}/>
        <Tier key={this.state.tier2Id} tierId={this.state.tier2Id}/>
        <Tier key={this.state.tier3Id} tierId={this.state.tier3Id}/>
      </div>
    )
  }
};

ReactDOM.render(<Tiers />, document.getElementById('Tiers'));
