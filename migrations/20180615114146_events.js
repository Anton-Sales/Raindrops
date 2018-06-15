
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events',table => {
        table.increments('id')
        table.string('color_id')
        table.string('type_id')
        table.string('time')
        table.string('top')
        table.string('left')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
