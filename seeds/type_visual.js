exports.seed = function (knex, Promise) {
  return knex('type_visual').del()
    .then(function () {
      return knex('type_visual').insert([
        {id: 1001, name: 'raindrop', top_move: 2, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1002, name: 'raindrop', top_move: 3, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1003, name: 'raindrop', top_move: 4, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1004, name: 'raindrop', top_move: 5, left_move: 0, top_edge: 0, left_edge: 0}

      ])
    })
}
