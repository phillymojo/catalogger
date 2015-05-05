/** @jsx React.DOM */

var React = require('react');
var pageData = require('./pageData');

var CataloggerApp = require('./components/CataloggerApp.react');

React.render(
	<CataloggerApp pageData= {pageData} />, 
	document.getElementById('react-app')
); 