const Cep = require('../models/Cep');

const findCep = async(seachCep) => {
  const results = await Cep.findCep(seachCep);
  
  return results
};

const create = async() => {
  const newCep = Cep.create();
  const { cep, logradouro, bairro, localidade, uf} = newCep
  return ({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
}

module.exports = {
  findCep,
  create
}