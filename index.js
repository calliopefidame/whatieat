const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
});

var steam = require('./routes/steam');
app.use('/steam', steam);
var person = require('./routes/person');
app.use('/person', person);
var test = require('./routes/test');
app.use('/test', test);

http.listen(80, () => {
    console.log('listening on 80');
})