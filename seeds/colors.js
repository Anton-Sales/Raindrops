exports.seed = function (knex, Promise) {
  return knex('colors').del()
    .then(function () {
      return knex('colors').insert([
        {c_id: 1, color: 'Ambitious Aardvark'},        
      ])
    })
}
