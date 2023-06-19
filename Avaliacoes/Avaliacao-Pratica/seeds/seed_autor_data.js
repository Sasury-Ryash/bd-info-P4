exports.seed = function(knex) {
    return knex('autores')
      .del()
      .then(function() {
        return knex('autores').insert([
          { nome: 'Fulano', biografia: 'N/A', nacionalidade: 'espaço' },
          { nome: 'Cicrano', biografia: 'N/A', nacionalidade:'terra' },
           { nome: 'Beltrano', biografia: 'N/A', nacionalidade:'marte' },
        ]);
      })
  };