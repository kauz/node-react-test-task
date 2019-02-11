exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('manufacturer').del()
    .then(function () {
      // Inserts seed entries
      return knex('manufacturer').insert([
        {id: 1, name: 'BMW', country: 'Germany'},
        {id: 2, name: 'Ford', country: 'USA'},
        {id: 3, name: 'Subaru', country: 'Japan'}
      ]);
    });
};
