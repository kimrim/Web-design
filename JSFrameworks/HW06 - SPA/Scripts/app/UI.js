/// <reference path="../libs/_references.js" />

window.ui = (function () {

    var Controls = Class.create({
        init: function (serviceUrl) {
            this.attachHandlers('#main-container');
        },
        alertError: function (selector, error) {
            $(selector + ' .alert-content')
                .text(error.responseJSON.Message);

            $(selector + ' .alert-box')
                .show(300);
        },
        attachHandlers: function (selector) {
            var self = this,
                wrap = $(selector);

            wrap.on('click', '.btn-submit', function (e) {
                $('.alert-box').hide();
            });
        }
    })

    return {
        controls: function () {
            return new Controls();
        }
    }
}());