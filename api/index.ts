import { Knex } from 'knex'
import { getDb, TABLE } from './db'

const getUpcomingEvents = async (db?: Knex) => {
  const _db: Knex = db || await getDb()
  return _db
    .select('*')
    .from(TABLE.EVENTS)
    .whereRaw('start_date > NOW()')
}

export default { getUpcomingEvents }