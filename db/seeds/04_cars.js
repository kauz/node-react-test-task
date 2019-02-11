exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').del()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {id: 1, fk_color: 1, fk_model: 1, year: '2001'},
        {id: 2, fk_color: 2, fk_model: 2, year: '2004'},
        {id: 3, fk_color: 3, fk_model: 3, year: '2005'},
        {id: 4, fk_color: 1, fk_model: 4, year: '2007'},
        {id: 5, fk_color: 2, fk_model: 5, year: '1993'},
        {id: 6, fk_color: 3, fk_model: 6, year: '2000'},
        {id: 7, fk_color: 1, fk_model: 7, year: '2015'},
        {id: 8, fk_color: 2, fk_model: 8, year: '1999'},
        {id: 9, fk_color: 3, fk_model: 9, year: '2005'},
      ]);
    });
};
