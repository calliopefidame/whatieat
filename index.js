const app = require('express')();
var fs = require('fs');
var privateKey = fs.readFileSync('private.key', 'utf8');
var certificate = fs.readFileSync('mysubdomain_mydomain_com.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
const http = require('http').createServer(credentials, app);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
});

var steam = require('./routes/steam');
app.use('/steam', steam);
var person = require('./routes/person');
app.use('/person', person);

http.listen(443, () => {
    console.log('listening on 443');
})