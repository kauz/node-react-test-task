module.exports = {

  development: {
      client: 'postgresql',
      connection: {
          host: 'localhost',
          database: 'node-test',
          user:     'postgres',
          password: '331262'
      },
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          directory: './db/migrations',
          tableName: 'knex_migrations'
      },
      seeds: {
          directory: './db/seeds'
      }
  }

};
