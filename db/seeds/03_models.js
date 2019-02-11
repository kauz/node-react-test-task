exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('model').del()
    .then(function () {
      // Inserts seed entries
      return knex('model').insert([
        {id: 1, name: 'E34', fk_manufacturer: 1},
        {id: 2, name: 'E92', fk_manufacturer: 1},
        {id: 3, name: 'F22', fk_manufacturer: 1},
        {id: 4, name: 'lor', fk_manufacturer: 2},
        {id: 5, name: 'em', fk_manufacturer: 2},
        {id: 6, name: 'ip', fk_manufacturer: 2},
        {id: 7, name: 'sum', fk_manufacturer: 3},
        {id: 8, name: 'dol', fk_manufacturer: 3},
        {id: 9, name: 'or', fk_manufacturer: 3},
      ]);
    });
};
