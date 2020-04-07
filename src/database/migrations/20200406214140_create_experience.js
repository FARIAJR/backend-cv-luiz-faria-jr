
exports.up = function(knex) {
    return knex.schema.createTable('experience', function (table){
        table.increments();
        table.string('company',200).notNullable();
        table.string('activities',2000).notNullable();
        table.string('role',2000).notNullable();
        table.string('start').notNullable();
        table.string('end').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('experience');
};
