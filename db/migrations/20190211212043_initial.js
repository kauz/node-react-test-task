exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema
      .createTable('manufacturer', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.string('country').notNullable();
      })
      .createTable('model', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.integer('fk_manufacturer').references('manufacturer.id');
      })
      .createTable('color', (table) => {
        table.increments('id').primary();
        table.string('hex').notNullable().unique();
        table.string('name').notNullable();
      })
      .createTable('car', (table) => {
        table.increments('id').primary();
        table.integer('fk_color').references('color.id');
        table.integer('fk_model').references('model.id');
        table.string('year').notNullable();
        table.string('picture');
      })

  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('car'),
    knex.schema.dropTable('color'),
    knex.schema.dropTable('model'),
    knex.schema.dropTable('manufacturer'),
  ]);
};
