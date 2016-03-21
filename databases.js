/*
 * Databases
 * 
 * param: database (e.g. 'rethinkdb')
 */
module.exports = function(database) {
  var database = toLowerCase(database);
  var _Databases = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(database);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Databases databases required.");
  _Databases.database = require('./' + database + '.js');
  return _Databases;
};//does not call itself
