const express = require('express');
const router = express.Router();
const animals = require("../services/animals")

router.get('/', async function (req, res, next) {
        try{
            res.json(await animals.getDatas())
        }
        catch (err) {
            next(err)
        }
        //res.json({"message": "animals router"})
})

router.post('/', async function (req, res, next) {
    try{
        res.json(await animals.createAnimal(req.body))
    }
    catch (err) {
        next(err)
    }
    //res.json({"message": "animals router"})
})

router.put('/', async function (req, res, next) {
    try{
        res.json(await animals.updateAnimal(req.body))
    }
    catch (err) {
        next(err)
    }
    //res.json({"message": "animals router"})
})

router.delete('/', async function (req, res, next) {
    try{
        res.json(await animals.deleteAnimal(req.body))
    }
    catch (err) {
        next(err)
    }
    //res.json({"message": "animals router"})
})

module.exports = router