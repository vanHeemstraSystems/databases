/*
 * File: rethinkdb.js
 * Module 'rethinkdbdash' gets retrieved from local node_modules 
 */
var rethinkdb = require('rethinkdbdash');
/*
 * Create a new Rethinkdb that let users create sub-rethinkdb.
 * @return {Rethinkdb}
 */
function Rethinkdb() {
  return (rethinkdb); // Works!
}

module.exports = Rethinkdb;