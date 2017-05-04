/**
 * start server:node app.js
 * @author huangfeihong
 * @date 2017-05-04 13:59
 */

var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('index', {})
})

var key = require("./routes/key");
app.get('/keys', key.keys);

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});