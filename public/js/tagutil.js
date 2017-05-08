/**
 *
 * @author huangfeihong
 * @date 2017-05-08
 */
var tagutil = {};
(function (tagutil) {

    tagutil.tags = function (callback) {
        $.get('/tags/', function(keys){
            callback(keys);
        });
    };

    tagutil.set = function (key, value, callback) {
        $.post('/tag/set/' + key, {value: value}, function(ok){
            callback(ok);
        });
    };

    tagutil.del = function (key, callback) {
        $.get('/tag/del/' + key, function(ok){
            callback(ok);
        });
    };
})(tagutil)