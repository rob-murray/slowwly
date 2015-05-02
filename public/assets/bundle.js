(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var SlowwlyUrl = require('./slowwly_url');
var InputForm = require('./input_form');

var App = React.createClass({displayName: "App",
    render() {
        return (
          React.createElement("div", null, 
            React.createElement(InputForm, null), 
            React.createElement(SlowwlyUrl, {host: "http://slowwly.robertomurray.co.uk"})
          )
        );
    }
});

module.exports = App;


},{"./input_form":2,"./slowwly_url":3}],2:[function(require,module,exports){

var InputForm = React.createClass({displayName: "InputForm",
  render() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "input-field col s6"}, 
          React.createElement("input", {placeholder: "http://google.com", id: "redirect_url", type: "text", className: "validate"})
        ), 
        React.createElement("div", {className: "input-field col s4"}, 
          React.createElement("p", {className: "range-field"}, 
            React.createElement("input", {type: "range", id: "delay_time", min: "1", max: "10000"})
          )
        ), 
        React.createElement("div", {className: "input-field col s2 center"}, 
          React.createElement("span", null, "1"), " Second"
        )
      )
    )
  }
});

module.exports = InputForm;


},{}],3:[function(require,module,exports){

var SlowwlyUrl = React.createClass({displayName: "SlowwlyUrl",
  render() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col s12"}, 
          React.createElement("div", {className: "card blue-grey darken-1"}, 
            React.createElement("div", {className: "card-content white-text"}, 
              React.createElement("span", {className: "card-title"}, "Your Slowwly URL"), 
              React.createElement("p", {className: "center"}, this.props.host, "/delay/delay_time/url/url")
            ), 
            React.createElement("div", {className: "card-action"}, 
              React.createElement("a", {href: "#"}, "Copy")
            )
          )
        )
      )
    )
  }
});

module.exports = SlowwlyUrl;


},{}],4:[function(require,module,exports){
var App = require('./components/app');

React.render(
  React.createElement(App, null),
  document.getElementById('app')
);


},{"./components/app":1}]},{},[4]);
