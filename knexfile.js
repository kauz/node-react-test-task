require('dotenv').config();

module.exports = {

  development: {
      client: process.env.client || 'postgresql',
      connection: {
          host: process.env.host || 'localhost',
          database: process.env.database,
          user:     process.env.user,
          password: process.env.password
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
