exports.seed = function (knex, Promise) {
  return knex('type_visual').del()
    .then(function () {
      return knex('type_visual').insert([
        {id: 1001, name: 'raindrop', top_move: 12, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1002, name: 'raindrop', top_move: 13, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1003, name: 'raindrop', top_move: 15, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1004, name: 'raindrop', top_move: 18, left_move: 0, top_edge: 0, left_edge: 0},
        {id: 1021, name: 'ball', top_move: 3, left_move: 3, top_edge: 1, left_edge: 1},
        {id: 1022, name: 'ball', top_move: 5, left_move: 5, top_edge: 1, left_edge: 1},
        {id: 1023, name: 'ball', top_move: 6, left_move: 2, top_edge: 1, left_edge: 1},
        {id: 1024, name: 'ball', top_move: 8, left_move: 7, top_edge: 1, left_edge: 1},
        {id: 1025, name: 'ball', top_move: 6, left_move: 4, top_edge: 1, left_edge: 1},
        {id: 1026, name: 'ball', top_move: 6, left_move: 3, top_edge: 1, left_edge: 1}
      ])
    })
}
