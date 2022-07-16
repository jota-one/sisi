import http from 'http'
import { Knex } from 'knex'
import { TABLE } from './constants'

const getUpcomingEvents = async (db: Knex) => {
  return db
    .select('*')
    .from(TABLE.EVENTS)
    .whereRaw('start_date > NOW()')
}

const handleRoutes = async (db: Knex, prefix: String, req: http.IncomingMessage) => {
  console.log('(sisi) handleRoutes', { prefix, url: req.url })
  return { routeHandledBySisi: true }
}

export { getUpcomingEvents, handleRoutes }