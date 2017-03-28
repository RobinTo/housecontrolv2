// Server is written in native node compitable syntax, without import etc
// since initially it was run directly in node. This is no longer the case
// feel free to use webpack syntax.

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');

const port = 3000;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
var App = require('../App').default;
var router = require('./api').default;
const server = express();

server.use('/build', express.static('./build'));
server.use('/', express.static('./static'));

server.use('/api', router);

server.use((req, res) => {
  let context = {};

  let markup = ReactDOMServer.renderToString(React.createElement(ReactRouter.StaticRouter, {
    location: req.url,
    context: context
  }, React.createElement(App)));
  if (process.env.NODE_ENV === 'development') {
    res.write(template({body: markup, css: ''}));
  } else {
    res.write(template({body: markup, css: '<link rel="stylesheet" type="text/css" href="build/main.css">'}))
  }
  res.end();
});

console.log('Express static server starting on port: ' + port);
server.listen(port);
