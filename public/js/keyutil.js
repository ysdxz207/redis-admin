/**
 *
 * @author huangfeihong
 * @date 2017-05-05 17:03
 */
var keyutil = {};
(function (keyutil) {

    keyutil.keys = function (query, callback) {
        $.get('/keys/' + query, function(keys){
            callback(keys);
        });
    };
    keyutil.del = function (key, callback) {
        $.get('/del/' + key, function(num){
            callback(num);
        });
    };
})(keyutil)