const Cep = require('../models/Cep');

const findCep = async(cep) => {
  const results = await Cep.findCep(cep);
  return ({
    cep: results.cep,
    logradouro: results.logradouro,
    bairro: results.bairro,
    localidade: results.localidade,
    uf: results.uf,
  });
};

module.exports = {
  findCep,
}