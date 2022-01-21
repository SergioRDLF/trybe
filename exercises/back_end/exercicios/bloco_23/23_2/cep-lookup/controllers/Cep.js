const Cep = require('../services/Cep');
const Joi = require('joi');

const CEP_REGEX = /\d{5}-\d{3}/;

const cepIsValid = (cep) => {
  // if (!CEP_REGEX.test(cep)) return cep;
  if (cep.length !== 8) return false;
  const cepValidated = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return cepValidated;
}

const findCep = async(req, res) => {
  const { cep } = req.params

  const validCep = cepIsValid(cep);
  if (!validCep) return res.status(404).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });

  const results = await Cep.findCep(validCep);
  if (results.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

  return res.status(200).json(results);
}
// ainda trabalhando nela
const create = async(req, res) => {
  const { cep } = req.body;

  const validCep = cepIsValid(cep);
  if (!validCep) return res.status(400).json({ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } });

  const { error } = Joi.object({
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return res.status(400).json({ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } });



}

module.exports = {
  findCep
}