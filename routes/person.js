const person = require('express').Router();
const database = require('../objets/database');


person.get('/', (req, res) => {
    database.query('select * from personne', (error, result, field) =>{
        if(error) res.status(500).send(error);

        res.send(result);
    })
});

module.exports = person;




