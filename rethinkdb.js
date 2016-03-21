/*
 * RethinkDB Database
 */
module.exports = function() {
  var _RethinkDB = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))();
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Databases rethinkdb required.");
  var rethinkdb = require(path.join(paths.libraries, '/rethinkdb.js'));
  _RethinkDB = rethinkdb;
  return _RethinkDB;
};//does not call itself
