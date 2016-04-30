/*
 * rethinkdb.js
 */
var rethinkdb = require('rethinkdbdash'); // module 'rethinkdbdash' gets retrieved from local node_modules

/**
 * Create a new Rethinkdb that let users create sub-rethinkdb.
 * @return {Rethinkdb}
 */
function Rethinkdb() { 
  self = rethinkdb; // set self to rethinkdb
}

module.exports = Rethinkdb;