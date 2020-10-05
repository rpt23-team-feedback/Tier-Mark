var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props)); //


    _this.state = {
      itemId: 1, // from Tiers
      itemName: 'game 1', // from Item service
      itemImage: '', // from Item service
      availability: '', // from System Requirements service
      feedback: {
        positiveReviews: 90, // from Reviews service
        numberOfReviews: 526, // from Reviews service
        reviewsFrom: 'Steam' // from Reviews service
      }
    };
    _this.getItem = _this.getItem.bind(_this);
    _this.getAvailability = _this.getAvailability.bind(_this);
    _this.getReviews = _this.getReviews.bind(_this);
    return _this;
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getItem();
      this.getAvailability();
      this.getReviews();
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      // This will call out to Item service
    }
  }, {
    key: 'getAvailability',
    value: function getAvailability() {
      // This will call out to System Requirements service
    }
  }, {
    key: 'getReviews',
    value: function getReviews() {
      // This will call out to Reviews service
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'item-view' },
        'WIP'
      );
    }
  }]);

  return Item;
}(React.Component);

export default Item;