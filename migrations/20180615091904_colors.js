
exports.up = function(knex, Promise) {
  return knex.schema.createTable('colors',table => {
        table.increments('c_id')
        table.string('color')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('colors')  
};
