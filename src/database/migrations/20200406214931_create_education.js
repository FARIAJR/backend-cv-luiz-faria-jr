
exports.up = function(knex) {
    return knex.schema.createTable('education', function (table){
        table.increments();
        table.string('school',200).notNullable();
        table.string('degree',200).notNullable();
        table.string('description',200).notNullable();
        table.string('activities',200).notNullable();
        table.string('obs',2000).notNullable();
        table.string('start').notNullable();
        table.string('end').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('education');
};
