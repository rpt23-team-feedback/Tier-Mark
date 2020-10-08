var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';

var Tier = function (_React$Component) {
  _inherits(Tier, _React$Component);

  function Tier(props) {
    _classCallCheck(this, Tier);

    var _this = _possibleConstructorReturn(this, (Tier.__proto__ || Object.getPrototypeOf(Tier)).call(this, props));

    _this.state = {
      // Some of this will move to Item component
      // But I want all of it together so I can easily see it all at once
      bundleId: 1,
      tier: {
        tierId: 1, // from this service
        tierCost: 1, // minimum cost
        items: {
          item1: {
            itemId: 1, // from Tiers
            itemName: 'game 1', // from Item service
            itemImage: '', // from Item service
            availability: '', // from System Requirements service
            feedback: {
              positiveReviews: 90, // from Reviews service
              numberOfReviews: 526, // from Reviews service
              reviewsFrom: 'Steam' // from Reviews service
            }
          },
          item2: {
            itemId: 2, // from this service
            itemName: 'game 2', // from Item service
            itemImage: '', // from Item service
            availability: '', // from System Requirements service
            feedback: {
              positiveReviews: 76, // from Reviews service
              numberOfReviews: 9652, // from Reviews service
              reviewsFrom: 'Steam' // from Reviews service
            }
            // Will need to extend to max number of items later
          } }
      }
    };
    return _this;
  }

  _createClass(Tier, [{
    key: 'getTierData',
    value: function getTierData() {
      var _this2 = this;

      var tierId = this.state.tier.tierId;
      $.ajax({
        method: 'GET',
        url: '/itemsIncluded',
        // url: './itemsIncluded:' + tierId,
        datatype: 'json'
      }).done(function (data) {
        _this2.setState({
          //TODO
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(Item, null)
        )
      );
    }
  }]);

  return Tier;
}(React.Component);

export default Tier;