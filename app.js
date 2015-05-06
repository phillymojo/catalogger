/** @jsx React.DOM */

var React = require('react');
var pageData = require('./pageData');

var CataloggerApp = require('./components/CataloggerApp.react');

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

React.render(
	<CataloggerApp pageData={pageData} items={initialState} />, 
	document.getElementById('react-app')
); 