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
  // }, mysql://:@us-cdbr-iron-east-01.cleardb.net/heroku_08d4ab31bc72db3?reconnect=true

  development: {
    client: 'mysql',
    connection: {
      host:     'us-cdbr-iron-east-01.cleardb.net',//'127.0.0.1',
      database: 'heroku_08d4ab31bc72db3',//'cv-online',
      user:     'b0b3a9414f2de7',//'root',
      password: 'af5801b1',//'root'
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
