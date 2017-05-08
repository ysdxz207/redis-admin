/**
 * start server:node app.js
 * @author huangfeihong
 * @date 2017-05-04 13:59
 */

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))//extended为false表示使用querystring来解析数据，这是URL-encoded解析器
// parse application/json
app.use(bodyParser.json())//添加json解析器


app.get('/', function (req, res) {
    res.render('index', {})
})

var key = require("./routes/key");
app.get('/keys/:pattern', key.keys);
app.get('/get/:key', key.get);
app.get('/del/:key', key.del);
app.post('/update/:key', key.update);

var tag = require("./routes/tag");

app.get('/tag', tag.tag);
app.get('/tags', tag.tags);
app.post('/tag/set/:key', tag.set);
app.get('/tag/del/:key', tag.del);



var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});