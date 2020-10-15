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
    let bundleId = this.state.bundleId;
    $.ajax({
      method: 'GET',
      url: '/tiersIncluded/' + bundleId,
      datatype: 'json',
      success: (data) => {
        this.setState({
          tier1Id: data[0].tierId,
          tier2Id: data[1].tierId,
          tier3Id: data[2].tierId
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
        <Tier tierId={this.state.tier1Id}/>
        <Tier tierId={this.state.tier2Id}/>
        <Tier tierId={this.state.tier3Id}/>
      </div>
    )
  }
};

ReactDOM.render(<Tiers />, document.getElementById('Tiers'));
