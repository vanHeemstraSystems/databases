/*
 * index.js
 */
var DatabaseRethinkDB = require(__dirname+'/rethinkdb.js');

/**
 * Create a new Database that let users create sub-database.
 * @return {Database}
 */
function Database() { }

/**
 * Create a new DatabaseRethinkDB object.
 * @return {DatabaseRethinkDB}
 */
Database.prototype.rethinkdb = function() {
  return new DatabaseRethinkDB();
}

module.exports = Database;
