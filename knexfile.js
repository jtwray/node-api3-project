module.exports = {
  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/blog.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  development: {
    client: 'pg',
connection: 'postgres://oadqlvdmnbpdog:5116100a268b89bef4b565ad5f1a16f76ce0c03e3158d57f62940c67485304e4@ec2-52-200-119-0.compute-1.amazonaws.com:5432/d2gp89rcrlb6nl?ssl=true?rejectUnauthorized=true',
    // connection: {
    //   dbname: 'd2gp89rcrlb6nl',
    //   host: 'ec2-52-200-119-0.compute-1.amazonaws.com',
    //   port: 5432,
    //   user: 'oadqlvdmnbpdog',
    //   password: '5116100a268b89bef4b565ad5f1a16f76ce0c03e3158d57f62940c67485304e4',
    //   sslmode: require,
    //   rejectUnauthorized: false,
    //   ssl: true
   
    // },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  }

}
  // development: {
  //   client: 'pg',
  //   connection: process.env.DB_URL,
  //   pool: { min: 2, max: 10 },
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './db/seeds/dev'
  //   },
  //   useNullAsDefault: true
  // },
  // development: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/rventure',
  //   password: 'postgres',
  //   pool: { min: 2, max: 10 },
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './db/seeds/dev'
  //   },
  //   useNullAsDefault: true
  // },

  // development: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/',
  //   filename: './data/developmentpg.db3',
  //   pool: { min: 2, max: 10 },
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds'
  //   }
  // },


// development: {
//   client: 'sqlite3',
//   useNullAsDefault: true,
//   connection: {
//     filename: './data/development-rventure.db3'
//   },
//   pool: {
//     afterCreate: (conn, done) => {
//       conn.run('PRAGMA foreign_keys = ON', done)
//     }
//   },
//   migrations: {
//     directory: './data/migrations',
//     tableName: 'knex_migrations'
//   },
//   seeds: {
//     directory: './data/seeds'
//   }
// },
