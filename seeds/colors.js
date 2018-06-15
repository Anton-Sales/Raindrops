exports.seed = function (knex, Promise) {
  return knex('colors').del()
    .then(function () {
      return knex('colors').insert([
        {color: 'red'},
        {color: 'blue'},
        {color: 'green'},
        {color: 'yellow'},
        {color: 'orange'},
        {color: 'purple'},
        {color: 'pink'},
        {color: 'grey'},        
      ])
    })
}
