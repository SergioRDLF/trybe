const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Busca filme por um ID', () => {
  
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('Quando NÃO existe filme com o ID informado', () => {
    it('Retorna null', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.equal(null);
    });
  });

  describe('Quando EXISTE um filme com o ID informado', () => {

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(
        {
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      );
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('Retorna um objeto', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.an('object');
    });

    it('Retorna um objeto não vazio', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.not.empty;
    });

    it('Retorna um objeto com as propriedades: id, title, releaseYear, directBy', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });
  });
});