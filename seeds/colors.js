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
        {color: 'darkblue'},
        {color: 'aqua'},  
        {color: 'darkorchid'},  
        {color: 'darkslateblue'},  
        {color: 'indigo'},  
        {color: 'greenyellow'},        
        {color: 'mediumseagreen'},  
        {color: 'firebrick'},
        {color: 'lightseagreen'},  
        {color: 'midnightblue'},  
        {color: 'springgreen'}
      ])
    })
}
