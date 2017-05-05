/**
 *
 * @author huangfeihong
 * @date 2017-05-04 13:44
 */

var redis = require('redis'),
    RDS_PORT = 6379,        //端口号
    RDS_HOST = '127.0.0.1',    //服务器IP
    RDS_PWD = '123456',
    RDS_OPTS = {},            //设置项
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.auth(RDS_PWD, function () {
    //console.log('通过认证');
});

client.on("error", function (err) {
    console.error("Error " + err);
});


exports.getKeys = function (pattern, callback) {
    client.keys(pattern, callback);
};

exports.get = function(key, callback) {
    client.get(key, callback);
};

exports.del = function(key, callback) {
    client.del(key, callback);
};