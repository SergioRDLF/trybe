const connection = require('./connection');

const findCep = async(cep) => {
  const query = 'SELECT * FROM cep_lookup WHERE cep = ?';
  const [rows] = await connection.execute(query, [cep]);
  return rows[0] 
}

module.exports = {
  findCep,
}
