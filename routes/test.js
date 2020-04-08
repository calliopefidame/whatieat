const test = require('express').Router();


test.get('/', (req, res) => {
    res.status(200).send("I wand to break free");
});

module.exports = test;




