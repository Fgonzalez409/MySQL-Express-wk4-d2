const mysql = require('mysql2')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'database-1.chhkn1sxdw6u.us-east-2.rds.amazonaws.com',
        user: 'admin',
        password: 'Regio409!',
        database: 'database-1'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;