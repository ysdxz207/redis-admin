/**
 *
 * @author huangfeihong
 * @date 2017-05-05
 */
var keyutil = {};
(function (keyutil) {

    keyutil.keys = function (query, callback) {
        $.get('/keys/' + query, function(keys){
            callback(keys);
        });
    };
    keyutil.del = function (key, callback) {
        $.get('/del/' + key, function(flag){
            callback(flag);
        });
    };
    keyutil.update = function (key, value, callback) {
        $.post('/update/' + key, {value: value}, function(flag){
            callback(flag);
        });
    };

})(keyutil)