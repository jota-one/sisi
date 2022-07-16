import knex, { Knex } from 'knex'

let db: Knex

export const getDb = (): Knex => {
  if (!db) {
    const dbConfig = {
      client: 'mysql',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
      }
    }
    db = knex(dbConfig)
  }

  return db
}