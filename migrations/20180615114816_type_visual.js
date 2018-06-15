
exports.up = function(knex, Promise) {
  return knex.schema.createTable('type_visual',table => {
        table.increments('id')
        table.string('name')
        table.string('top_move')
        table.string('left_move')
        table.string('top_edge')
        table.string('left_edge')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('type_visual')
};
