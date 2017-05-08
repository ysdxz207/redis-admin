/**
 *
 * @author huangfeihong
 * @date 2017-05-04 16:57
 */

var r = require("../redis/redis");

exports.keys = function (req, res, next) {
    r.getKeys(req.params.pattern, function (err, keys) {
        if (!err) {
            return res.send(keys);
        } else {
            return res.send(err);
        }
    });
};

exports.get = function (req, res, next) {
    r.get(req.params.key, function (err, value) {
        if (!err) {
            return res.send(value);
        } else {
            return res.send(err);
        }
    })
};

exports.del = function (req, res, next) {
    r.del(req.params.key, function (err, num) {
        if (!err) {
            return res.send(true);
        } else {
            return res.send(err);
        }
    })
};

exports.update = function (req, res, next) {
    r.set(req.params.key, req.body.value, function (err, isOk) {
        if (!err) {
            return res.send(true);
        } else {
            return res.send(err);
        }
    })
};