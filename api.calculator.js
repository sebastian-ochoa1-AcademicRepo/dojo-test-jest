const express = require("express");
const app = express();
const cal = require('./calculator');

app.get("/add", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: cal.add(a, b)
    });
});

app.get("/res", (req, res) =>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({
        result: cal.res(a, b)
    });
});

//exports app module
module.exports = app;