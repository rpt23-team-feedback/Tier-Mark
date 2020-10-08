var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import Tier from './components/tier.jsx';
import $ from 'jquery';

var Tiers = function (_React$Component) {
  _inherits(Tiers, _React$Component);

  function Tiers(props) {
    _classCallCheck(this, Tiers);

    var _this = _possibleConstructorReturn(this, (Tiers.__proto__ || Object.getPrototypeOf(Tiers)).call(this, props));

    _this.state = {
      bundleId: 1,
      tier1Id: 1,
      tier2Id: 2,
      tier3Id: 3
    };
    _this.getTierData = _this.getTierData.bind(_this);
    return _this;
  }

  _createClass(Tiers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getTierData();
    }
  }, {
    key: 'getTierData',
    value: function getTierData() {
      var _this2 = this;

      var bundleId = this.bundleId;
      $.ajax({
        method: 'GET',
        // url: '/tiersIncluded',
        url: './tiersIncluded:' + bundleId,
        datatype: 'json',
        success: function success(data) {
          _this2.setState(data);
          console.log('state updated', _this2.state);
        },
        error: function error(err) {
          console.log('err', err);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Tier, { tierId: this.state.tier1Id }),
        React.createElement(Tier, { tierId: this.state.tier2Id }),
        React.createElement(Tier, { tierId: this.state.tier3Id })
      );
    }
  }]);

  return Tiers;
}(React.Component);

ReactDOM.render(React.createElement(Tiers, null), document.getElementById('Tiers'));