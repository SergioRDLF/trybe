const connection = require('./connection');

const findCep = async(cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const rows = await connection.execute(query, [cep]);
  
  return rows[0]; 
}

const create = async({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const newCep = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return newCep;
}

module.exports = {
  findCep,
  create,
}
