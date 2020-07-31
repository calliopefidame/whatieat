const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const PORT = 3001;
var bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

var bouffe = require('./routes/bouffe');
app.use('/bouffe', bouffe);

http.listen(PORT, () => {
    console.log('listening on ' + PORT);
});