/**
 *
 * @author huangfeihong
 * @date 2017-05-04 16:57
 */

var r = require("../redis/redis");

exports.keys = function (req, res, next) {
    console.log(req.params.pattern);
    r.getKeys(req.params.pattern, function (err, keys) {
        if (!err) {
            return res.send(keys);
        } else {
            return res.send(err);
        }
    });
};