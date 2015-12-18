require ('./main.css');
let React = require('react');
let ReactDOM = require('react-dom');
let Game = require('./components/Game.jsx');

let appNode = document.createElement('div');
appNode.className = 'react-game';
document.body.appendChild(appNode);
ReactDOM.render(<Game />, appNode);
