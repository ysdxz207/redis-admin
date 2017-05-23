/**
 *
 * @author huangfeihong
 * @date 2017-05-05 15:09
 */

var fs = require("fs");
var map = require("./tools/map");

var confDir = "config",
    conf = confDir + "/tags.json";

if (!fs.existsSync(confDir)) {
    fs.mkdirSync(confDir);
    fs.writeFile(conf, '', {flag: 'w'}, function (err) {
        if (err) throw err;
    });
}


exports.tag = function (req, res, next) {
    res.render('tag');
};




exports.tags = function (req, res, next) {
    fs.readFile(conf, 'utf8', function (err, data) {
        if (err) throw err;

        if (!data) {
            data = '[]';
        }
        return res.send(JSON.parse(data));
    });
};


exports.set = function (req, res, next) {
    fs.readFile(conf, 'utf8', function (err, data) {
        if (err) throw err;
        if (!data) {
            data = '[]';
        }
        var json = JSON.parse(data);

        var map = new Map();
        map.putAll(json);
        map.put(req.params.key, req.body.value);
        fs.writeFile(conf, JSON.stringify(map.elements), {flag: 'w'}, function (err) {
            if (err) throw err;
            return res.send(true);
        });
    });
};

exports.del = function (req, res, next) {
    fs.readFile(conf, 'utf8', function (err, data) {
        if (err) throw err;
        if (!data) {
            data = '[]';
        }
        var json = JSON.parse(data);

        var map = new Map();
        map.putAll(json);
        map.remove(req.params.key);
        fs.writeFile(conf, JSON.stringify(map.elements), {flag: 'w'}, function (err) {
            if (err) throw err;
            return res.send(true);
        });
    });
};