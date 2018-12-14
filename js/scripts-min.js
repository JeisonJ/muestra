(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{
    "name": "Skrill",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "Uphold",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "Payeer",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "Perfect Money",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "PayPal",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "Neteller",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "BOFA",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "Zelle",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "---",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "BTC",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "ETH",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "XRP",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "DASH",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "BCH",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "XMR",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "---",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "EUR",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "USD",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "PEN",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "COP",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "PAB",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  },
  {
    "name": "MXN",
    "exchange_rate": 1.2,
    "transfer_fee": 0.00,
    "image": ""
  }
]

},{}],2:[function(require,module,exports){
'use strict';

var _coins = require('./coins');

var _coins2 = _interopRequireDefault(_coins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import smoothie from 'smoothie-js'

// smoothie();


var app = new Vue({
  el: '#app',
  data: {
    coins: _coins2.default,
    depositAmount: 0,
    currencyToChange: '',
    receiveAmount: 0,
    currencyToReceive: '',
    toggleMenu: false
  },
  methods: {
    setCurrencyToChange: function setCurrencyToChange(currency) {
      console.log(currency);
    },
    setCurrencyToReceive: function setCurrencyToReceive(currency) {
      console.log(currency);
    },
    showToggleMenu: function showToggleMenu() {
      this.toggleMenu = !this.toggleMenu;
      console.log(this.toggleMenu);
    }
  }
});

},{"./coins":1}]},{},[2]);

//# sourceMappingURL=scripts-min.js.map
