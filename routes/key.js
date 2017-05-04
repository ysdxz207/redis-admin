/**
 *
 * @author huangfeihong
 * @date 2017-05-04 16:57
 */

var r = require("../redis/redis");

exports.keys = function (req, res, next) {
    r.getKeys("*", function (err, keys) {
        if (!err) {
            return res.send(keys);
        } else {
            return res.send(err);
        }
    });
};