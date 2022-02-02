const Joi = require('joi');

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

  const login = async (req, res) => {

  };

  module.exports = {

  };