const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const Cep = require('../cep-lookup/controllers/Cep');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => { 
  res.status(200).json({ mensage: "pong" });
});

app.get('/cep/:cep', Cep.findCep());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
