/**
 *
 * @author huangfeihong
 * @date 2017-05-08
 */
var msg = {};
(function (msg) {
    msg.alert = function (title, text, callback) {
        var modal = $('<div>').addClass('modal is-active');
        var modalBackground = $('<div>').addClass('modal-background');
        var modalContainer = $('<div>').addClass('modal-card');
        var header = $('<header>').addClass('modal-card-head');
        var titleObj = $('<p>').addClass('modal-card-title');
        var btnDel = $('<button>').addClass('delete');
        var body = $('<section>').addClass('modal-card-body');
        var footer = $('<footer>').addClass('modal-card-foot');
        var btnOk = $('<a>').addClass('button is-success confirm');
        var btnCancel = $('<a>').addClass('button cancel');
        header.append(titleObj).append(btnDel);
        footer.append(btnOk).append(btnCancel);
        modalContainer.append(header).append(body).append(footer);
        modal.append(modalBackground);
        modal.append(modalContainer);

        if (title) {
            titleObj.text(title);
        }
        if (text) {
            body.text(text);
        }


        btnOk.text('确定');
        btnCancel.text('取消');

        btnDel.on('click', function () {
            if (callback) {
                callback(false);
            }
            modal.remove();
        });

        btnCancel.on('click', function () {
            if (callback) {
                callback(false);
            }
            modal.remove();
        });
        btnOk.on('click', function () {
            if (callback) {
                callback(true);
            }
           modal.remove();
        });

        $('body').append(modal);
    };
})(msg);