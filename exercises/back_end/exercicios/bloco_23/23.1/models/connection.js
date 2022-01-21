const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Sergio123456789*',
  database: 'users_crud'
})

module.exports = connection;