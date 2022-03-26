const express = require("express");
const app = express();
const cb = require('./codeBreaker');
var intentos = 0;

//const app = express();app.listen(3000, () => {
// console.log("El servidor está inicializado en el puerto 3000");
//});


app.get('/codebreaker', async function(req, res) {
    intentos = intentos + 1;
    let code = req.query.code;
    var resultCB = cb.breakCode(code)

    res.json({
        result: resultCB,
        attempts: intentos
    });
});

app.get('/reset', async function(req, res) {
    cb.setRandomSecret();
    intentos = 0;
    res.json({
        result: 'Reiniciado correctamente'
    });
});

app.get('/resettests', async function(req, res) {
    cb.setSecret('6489');
    intentos = 0;
});

module.exports = app;