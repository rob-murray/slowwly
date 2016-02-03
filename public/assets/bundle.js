!function e(t,r,a){function n(s,i){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!i&&c)return c(s,!0);if(l)return l(s,!0);var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}var u=r[s]={exports:{}};t[s][0].call(u.exports,function(e){var r=t[s][1][e];return n(r?r:e)},u,u.exports,e,t,r,a)}return r[s].exports}for(var l="function"==typeof require&&require,s=0;s<a.length;s++)n(a[s]);return n}({1:[function(e,t,r){var a=e("./DisplayBox.jsx"),n=e("./InputForm.jsx"),l=React.createClass({displayName:"App",propTypes:{host:React.PropTypes.string.isRequired},getDefaultProps:function(){return{host:"http://slowwly.robertomurray.co.uk"}},getInitialState:function(){return{delayTime:3e3,url:"http://www.google.co.uk"}},handleInputChange:function(e){this.setState(e)},render:function(){var e=this._slowwlyUrl();return React.createElement("div",null,React.createElement(n,{onInputChange:this.handleInputChange,delayTime:this.state.delayTime,url:this.state.url}),React.createElement(a,{url:e}))},_slowwlyUrl:function(){return this.props.host+"/delay/"+this.state.delayTime+"/url/"+this.state.url}});t.exports=l},{"./DisplayBox.jsx":3,"./InputForm.jsx":4}],2:[function(e,t,r){var a=React.createClass({displayName:"Clipboard",propTypes:{value:React.PropTypes.string.isRequired},getDefaultProps:function(){return{className:"clipboard"}},selectText:function(){var e=this.getDOMNode();e.focus(),e.select()},render:function(){return React.createElement("textarea",React.__spread({},this.props,{readOnly:!0}))}});t.exports=a},{}],3:[function(e,t,r){var a=e("./Clipboard.jsx"),n=React.createClass({displayName:"DisplayBox",propTypes:{url:React.PropTypes.string.isRequired},getInitialState:function(){return{selected:!1}},getDefaultProps:function(){return{url:"{Select url and delay time}"}},render:function(){var e=this.state.selected?"Hit Ctrl + C":null;return React.createElement("div",{className:"row"},React.createElement("div",{className:"col s12"},React.createElement("div",{className:"card blue-grey darken-1"},React.createElement("div",{className:"card-content white-text"},React.createElement("h4",{ref:"slowwly_url",className:"card-title center"},this.props.url)),React.createElement("div",{className:"card-action"},React.createElement(a,{ref:"clipboard",value:this.props.url}),React.createElement("a",{href:"",onClick:this._handleCopyClick},"Copy")," ",e))))},_handleCopyClick:function(e){e.preventDefault(),this.refs.clipboard.selectText(),this.setState({selected:!0}),setTimeout(function(){this.setState({selected:!1})}.bind(this),5e3)}});t.exports=n},{"./Clipboard.jsx":2}],4:[function(e,t,r){var a=React.createClass({displayName:"InputForm",propTypes:{onInputChange:React.PropTypes.func.isRequired,delayTime:React.PropTypes.number.isRequired,url:React.PropTypes.string.isRequired},render:function(){var e=this._delayInSeconds(),t=this.props.url;return React.createElement("div",{className:"row"},React.createElement("div",{className:"input-field col s6"},React.createElement("input",{ref:"redirect_url",value:t,id:"redirect_url",type:"text",className:"validate",onChange:this._handleUrlChange})),React.createElement("div",{className:"input-field col s4"},React.createElement("input",{type:"range",id:"delay_time",min:"0",max:"10000",step:"100",onInput:this._handleDelayChange})),React.createElement("div",{className:"input-field col s2 center"},React.createElement("h5",null,e," secs")))},_handleDelayChange:function(e){e.preventDefault();var t=e.currentTarget.valueAsNumber;this.props.onInputChange({url:this.props.url,delayTime:t})},_handleUrlChange:function(e){e.preventDefault();var t=e.currentTarget.value;t&&this.props.onInputChange({url:t,delayTime:this.props.delayTime})},_delayInSeconds:function(){return this.props.delayTime/1e3}});t.exports=a},{}],5:[function(e,t,r){var a=e("./components/App.jsx");React.render(React.createElement(a,null),document.getElementById("app"))},{"./components/App.jsx":1}]},{},[5]);
