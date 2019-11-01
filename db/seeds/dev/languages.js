
exports.seed = function(knex) {
  return knex('languages').del()
    .then(function () {
      return knex('languages').insert([
        {name: 'Ruby'},
        {name: 'Rails'},
        {name: 'SQL'},
        {name: 'HTML & CSS'},
        {name: 'JavaScript'},
        {name: 'React'},
        {name: 'Node'},
        {name: 'Vue'}
      ])
    });
};
