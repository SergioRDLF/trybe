const connection = require('./connection');

const serialize = (booksData) => ({
  id: booksData.id,
  title: booksData.title,
  authorId: booksData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize);
};

// const getByAuthorId = async (authorId) => {
//   const query = 'SELECT id, title FROM model_example.books WHERE author_id = ?'
//   const [ bookData ] = await connection.execute(query, [authorId]);

//   if (bookData.length === 0) return null;

//   const booksCamel = bookData.map(serialize);
//   const { id, title } = booksCamel.map((book) => {
//     return {
//       id,
//       title,
//       authorId,
//     }
//   })
// };

module.exports = {
  getAll,
  // getByAuthorId,
};