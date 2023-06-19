exports.seed = function(knex) {
    return knex('livros')
      .del()
      .then(function() {
        return knex('livros').insert([
          {titulo: 'N/A', genero: 'N/A', dataPublic: '__/__/___', autor_id: 1},
          {titulo: 'N/A', genero: 'N/A', dataPublic: '__/__/___', autor_id: 2},
          {titulo: 'N/A', genero: 'N/A', dataPublic: '__/__/____', autor_id: 3},
        ]);
      })
  };