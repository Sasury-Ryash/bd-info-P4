const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Autor {
  static async criarAutor(autor) {
    try {
      const [id] = await database('autores').insert(autor);
      console.log('Autor criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarAutor(id, autor) {
    try {
      const result = await database('autores').where({ id }).update(autor);
      console.log('Autor atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterAutor(id) {
    try {
      const autor = await database('autores').where({ id }).first();
      console.log('Autor encontrado:', autor);
    } catch (error) {
      console.error('Erro ao obter autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async deleteAutor(id) {
    try {
      const result = await database('autores').where({ id }).del();
      console.log('Autor excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir autor:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Autor;