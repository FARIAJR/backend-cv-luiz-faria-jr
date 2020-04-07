// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './src/database/db.sqlite'
  //   },
  //   migrations:{
  //     directory:'./src/database/migrations'
  //   },
  //   useNullAsDefault: true,
  // },

  development: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      database: 'cv-online',
      user:     'root',
      password: 'root'
    },
    migrations:{
      tableName: 'knex_migrations',
      directory:'./src/database/migrations'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      database: 'cv-online',
      user:     'root',
      password: 'root'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      database: 'cv-online',
      user:     'root',
      password: 'root'
    },
    migrations:{
      directory:'./src/database/migrations'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
