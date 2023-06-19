const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Livro {
  static async criarLivro(livro) {
    try {
      const [id] = await database('livros').insert(livro);
      console.log('Livro criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarLivro(id, livro) {
    try {
      const result = await database('livros').where({ id }).update(livro);
      console.log('Livro atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterLivro(id) {
    try {
      const autor = await database('livros').where({ id }).first();
      console.log('Livro encontrado:', autor);
    } catch (error) {
      console.error('Erro ao obter livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async deleteLivro(id) {
    try {
      const result = await database('livros').where({ id }).del();
      console.log('Livro deletado:', result);
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Livro;