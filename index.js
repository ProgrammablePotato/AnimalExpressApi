const express = require('express');

const app = express();
const port = 3000;
const animalsRouter = require('./routes/animals');

app.use(express.json())

app.get('/', (req, res, next) => {
    res.json({"message": "ok"})
});

app.use('/animals', animalsRouter);

app.use(
    (err,req,res,next)=>{
    console.log(err.message,err.stack)
    res.status(err.statusCode || 500).json({"message":err.message})
})

app.listen(port, () => {
    console.log(`Fut a szeró itt: http://localhost:${port}`);
});