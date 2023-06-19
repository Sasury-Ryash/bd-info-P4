exports.up = function(knex) {
    return knex.schema
    .createTable('autores', function(table) {
      table.increments('id');
      table.string('nome').notNullable();
      table.string('biografia');
      table.string('nacionalidade').notNullable();
    });
};
exports.down = function(knex) {
    return knex.schema
    .dropIfExists('autores');
};
