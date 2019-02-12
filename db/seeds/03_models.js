exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('model').del()
    .then(function () {
      // Inserts seed entries
      return knex('model').insert([
        {id: 1, name: 'E34', fk_manufacturer: 1},
        {id: 2, name: 'E92', fk_manufacturer: 1},
        {id: 3, name: 'F22', fk_manufacturer: 1},
        {id: 4, name: 'Torino', fk_manufacturer: 2},
        {id: 5, name: 'Ranger', fk_manufacturer: 2},
        {id: 6, name: 'Mondeo', fk_manufacturer: 2},
        {id: 7, name: 'Impreza WRX STI', fk_manufacturer: 3},
        {id: 8, name: 'Forester', fk_manufacturer: 3},
        {id: 9, name: 'Legacy B4', fk_manufacturer: 3},
      ]);
    });
};
