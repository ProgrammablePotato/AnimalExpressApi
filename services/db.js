const mysql = require("mysql2/promise")
const {config} = require('../config')

async function query(sql) {
    const connection = await mysql.createConnection(config.db)
    try {
        const [result] = await connection.execute(sql)
        return result[0]
    } finally {
        await connection.end()
    }
}

module.exports = {query}