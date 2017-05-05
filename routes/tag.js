/**
 *
 * @author huangfeihong
 * @date 2017-05-05 15:09
 */

var fs = require("fs");

exports.tag = function (req, res, next) {
    res.render('tag');
};




exports.tags = function (req, res, next) {
    fs.readFile('config/tags.json', 'utf8', function (err, data) {
        if (err) throw err;
        return res.send(JSON.parse(data));
    });
};


