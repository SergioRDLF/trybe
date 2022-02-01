const express = require('express');
const bodyPaser = require('body-parser');

// const booksController = require('./controllers/booksController');
const { getAll, getById, create, updadeById, deleteById } = require('./controllers/BooksController');
const { getByAuthorName } = require('./controllers/AuthorController');

const app = express();
app.use(bodyPaser.json());

app.get('/books', getAll);
app.get('/books/:id', getById);
app.post('/books', create);
app.post('/books/:id', updadeById);
app.post('/books/:id', deleteById);

app.get('/authors/:name', getByAuthorName);



app.listen(3000, () => console.log('Rodando na porta 3000'))
