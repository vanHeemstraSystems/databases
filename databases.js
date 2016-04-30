/*
 * databases.js
 */
var DatabasesDatabase = require(__dirname+'/database.js');

/**
 * Create a new Databases that let users create sub-databases.
 * @return {Databases}
 */
function Databases() { }

/**
 * Create a new DatabasesDatabase object.
 * @return {DatabasesDatabase}
 */
Databases.prototype.database = function() {
  return new DatabasesDatabase();
}

module.exports = Databases;

// REMOVE ALL BELOW

// /*
//  * Databases
//  * 
//  * param: database (e.g. 'rethinkdb')
//  */
// module.exports = function(database) {
//   var database = toLowerCase(database);
//   var _Databases = {};
//   var path = require('../libraries/path');
//   var paths = require('../paths/paths');
//   config = require(path.join(paths.configurations, '/configurations.js'))(database);
//   var common = config.common,
//   server_prefix = common.server_prefix || 'PREFIX';
//   console.log(server_prefix + " - Databases database required.");
//   _Databases.database = require('./' + database + '.js');
//   return _Databases;
// };//does not call itself
