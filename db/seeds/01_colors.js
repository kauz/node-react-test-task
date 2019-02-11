exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('color').del()
    .then(function () {
      // Inserts seed entries
      return knex('color').insert([
        {id: 1, name: 'white', hex: '#ffffff'},
        {id: 2, name: 'black', hex: '#000000'},
        {id: 3, name: 'red', hex: '#ff0000'}
      ]);
    });
};
