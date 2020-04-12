const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

var steam = require('./routes/steam');
app.use('/steam', steam);
var person = require('./routes/person');
app.use('/person', person);
var test = require('./routes/test');
app.use('/test', test);

http.listen(PORT, () => {
    console.log('listening on ' + PORT);
})