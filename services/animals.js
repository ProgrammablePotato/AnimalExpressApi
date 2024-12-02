const db = require("./db")

async function getDatas() {
    const rows = db.query(
        "select * from animal"
    )
    return rows?rows:[]
}

module.exports = {
    getDatas
}