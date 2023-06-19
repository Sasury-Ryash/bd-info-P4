exports.up = function(knex) {
    return knex.schema
    .createTable('livros', function(table) {
      table.increments('id');
      table.string('titulo').notNullable();
      table.string('genero').notNullable();
      table.string('dataPublic').notNullable();
      table.integer('autor_id').unsigned();
      table.foreign('autor_id').references('autores.id');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropIfExists('livros');
};
