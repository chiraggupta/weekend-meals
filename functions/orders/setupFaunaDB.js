const faunadb = require('faunadb');

exports.q = faunadb.query;
exports.client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});
