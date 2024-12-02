const db = require("./db")

async function getDatas() {
    const rows = db.query(
        "select * from animal"
    )
    return rows?rows:[]
}

async function createAnimal(animal,params) {
    console.log("Animal:",animal)
    const result = await db.query(
        `
        insert into animal (name,species,price) values(?,?,?);
        `
        ,[
            animal.name,
            animal.species,
            animal.price
        ]
    )
    let message = "Error during creation of animal"
    if (result.affectedRows){
        message = "Animal created successfully"
    }
    return {message}
}

async function deleteAnimal(animal,params) {
    console.log("Animal:",animal)
    const result = await db.query(
        `
        delete from animal where id = ?
        `
        ,[
            animal.id,
        ]
    )
    let message = "Error during deletion of animal"
    if (result.affectedRows){
        message = "Animal deleted successfully"
    }
    return {message}
}

async function updateAnimal(animal,params) {
    console.log("Animal:",animal)
    const result = await db.query(
        `
        update animal set name=?, species=?, price=? where id=?;
        `
        ,[
            animal.name,
            animal.species,
            animal.price,
            animal.id
        ]
    )
    let message = "Error during updating of animal"
    if (result.affectedRows){
        message = "Animal updated successfully"
    }
    return {message}
}

async function patchAnimal(animal,params) {
    console.log("Patch Animal:",animal)
    console.log(Object.keys(animal))
    const result = await db.query(
        `
        update animal set name=?, species=?, price=? where id=?;
        `
        ,[
            animal.name,
            animal.species,
            animal.price,
            animal.id
        ]
    )
    let message = "Error during updating of animal"
    if (result.affectedRows){
        message = "Animal updated successfully"
    }
    return {message}
}

module.exports = {
    getDatas,
    createAnimal,
    deleteAnimal,
    updateAnimal,
    patchAnimal
}