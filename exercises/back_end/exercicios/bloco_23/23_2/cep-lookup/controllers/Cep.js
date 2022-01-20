const Cep = require('../services/Cep');

const cepIsValid = (cep) => {
  const CEP_REGEX = /\d{5}-\d{3}/;
  if (CEP_REGEX.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const findCep = async(req, res) => {
  const { cep } = req.params

  const validCep = cepIsValid(cep);
  if (!validCep) return res.status(404).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });

  const results = await Cep.findCep(validCep);
  if (results.length === 0) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } });

  return res.status(200).json(results);
}

module.exports = {
  findCep
}