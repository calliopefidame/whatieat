const bouffe = require('express').Router();
const database = require('../objets/database');


//Add one
bouffe.post('/', (req, res) => {
    
    var bouffe = req.body.bouffe;
    var nombreBouffe = req.body.nombreBouffe;
    var repas = req.body.repas;
    var typeNombreBouffe = req.body.typeNombreBouffe;

    console.log(bouffe + ';' + nombreBouffe + ';' + repas);

    database.query('insert into bouffe(`bouffe`,`nombreBouffe`,`repas`,`typeNombreBouffe`,`date`) values("' + bouffe + '", "' + nombreBouffe + '", "' + repas + '", "' + typeNombreBouffe + '", "' + new Date().toISOString().slice(0, 19).replace('T', ' ') + '");', (mysqlErr, mysqlRes, fields) => {
        if (mysqlErr) {
            res.send(mysqlErr).status(500);
        }
        res.send(mysqlRes).status(200);
    })
});

bouffe.get('/all', (req,res) => {
    database.query('select * from bouffe order by date desc;', (mysqlErr, mysqlRes, fields) => {
        if(mysqlErr){
            console.warn(mysqlErr);
            res.send(mysqlErr).status(500);
        }
        console.warn(mysqlRes);
        res.send(mysqlRes).status(200);
    });
})

bouffe.delete('/:id', (req, res) => {
    var idbouffe = req.params.id;
    database.query('delete from bouffe where idbouffe=' + idbouffe, (mysqlErr, mysqlRes, fields) => {
        if (mysqlErr) {
            console.warn(mysqlErr);
            res.send(mysqlErr).status(500);
        }
        console.warn(mysqlRes);
        res.send(mysqlRes).status(200);
    });
})
module.exports = bouffe;




