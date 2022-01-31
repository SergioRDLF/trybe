const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll()
    res.status(200).json(books);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id)
    res.status(200).json(book);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });
    res.status(200).json(book);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const book = await Book.update({ title, author, pageQuantity }, { where: { id } });
    res.status(200).json(book);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updadeById,
  deleteById,
}