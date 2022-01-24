const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });

  describe('Busca um filme pelo ID', () => {

    before(async () => {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    });

    describe('Quando NÃO existe um filme com o ID passado', () => {
      it('Retorna nulo', async () => {
        const result = await MoviesService.getById();
        expect(result).to.be.equal(null);
      });

      it('Quando EXISTE um filme com ID passado', () => {
        
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

        // after(() => {
        //   MoviesModel.getById.restore();
        // });

        it('Retorna um objeto', async () => {
          const response = await MoviesService.getById();
          expect(response).to.be.an('object');
        });
    
        it('Retorna um objeto não vazio', async () => {
          const response = await MoviesService.getById(1);
          expect(response).to.be.not.empty;
        });
    
        it('Retorna um objeto com as propriedades: id, title, releaseYear, directBy', async () => {
          const response = await MoviesService.getById(1);
          expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
        });
      });
    });
  });
});