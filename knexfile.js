'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/vaca_schedule'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/vaca_schedule_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
