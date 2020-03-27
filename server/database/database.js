const { Pool } = require('pg');
const URL = 'postgres://wzftzxnt:pRu5VE-gyv2S5ODB-7Dy9PlqJVUK0dtX@drona.db.elephantsql.com:5432/wzftzxnt';

const pool = new Pool ( {connectionString: URL} );

pool.on('connect', () => {
  console.log('connected to the database');
});

module.exports = {
    query: (query, params, cb) => {
      console.log(`this is the query: ${query}`);
      return pool.query(query, params, cb);
    },
  };
