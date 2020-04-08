const steam = require('express').Router();
const request = require('request');
const database = require('../objets/database');

const steamKey = '69CA488F57890F9BEA335453771D4C98';

steam.get('/', (req, res) => {
    res.send('partie Steam');
});


steam.get('/:steamid/getgames', (req, res) => {
    var steamid = req.params.steamid;
    database.query('SELECT * FROM steamapp.jeuxparpersonne where steamid=' + steamid + ';', (error, resultat, field) =>{
        if(error) res.status(500).send(error);

        res.send(resultat);
    })
});

steam.get('/:steamid/savegames', (req, res) => {
    var steamid = req.params.steamid;
    var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?' +
        'key=' + steamKey +
        '&steamid=' + steamid +
        '&format=json';
    request.get(url, function (error, steamHttpResponse, steamHttpBody) {

        res.setHeader('Content-Type', 'application/json');

        var isWrong = false;
        var body = JSON.parse(steamHttpBody);
        body.response.games.forEach(game => {
            query = 'insert into steamapp.jeuxparpersonne (`steamid`, `appid`, `PlayedTime`) values';
            query += ' (\'' + steamid + '\', ' + game.appid + ', ' + game.playtime_forever + ')';
            query += ' ON DUPLICATE KEY UPDATE  PlayedTime = ' + game.playtime_forever;
            database.query(query, (error, result, field) => {
                if (error) isWrong = true
            });
        });
        if (isWrong) res.status(500).send("il y a eu une erreur : " + error);
        else res.status(200).send('ISOK');

    });
});

steam.get('/game/:appid/achievements', (req, res) => {
    var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        'v2/?key=' + steamKey +
        '&appid=' + req.params.appid;
    request.get(url, function (error, steamHttpResponse, steamHttpBody) {
        res.setHeader('Content-Type', 'application/json');
        res.send(steamHttpBody);
    });
});

steam.get('/getAllGames', function (httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use
    var url = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';
    request.get(url, function (error, steamHttpResponse, steamHttpBody) {
        // Once we get the body of the steamHttpResponse, send it to our client
        // as our own httpResponse


        var body = JSON.parse(steamHttpBody);
        var query = 'INSERT INTO `steamapp`.`jeuxsteam` (`appid`, `name`) VALUES';
        body.applist.apps.forEach(element => {
            element.name = element.name.replace('\'', ' ').replace(/[\u0800-\uFFFF]/g, '');
            if (typeof (element.name) == 'string')
                query += ' (' + element.appid + ',  ' + database.escape(element.name) + '),';
        });
        query = query.slice(0, -1) + ';';

        database.query(query, (error, result, field) => {
            if (error) httpResponse.status(500).send(error);
            httpResponse.send('ISOK');
        });
    });
});

steam.get('/:gameid/gameInfo', function (httpRequest, httpResponse) {

    database.query('select name from steamapp.jeuxsteam where appid = ' + httpRequest.params.gameid, (error, res, field) => {
        if (error) httpResponse.status(500).send(error);

        httpResponse.send(res);
    })
});

module.exports = steam;




