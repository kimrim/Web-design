/// <reference path="../libs/require.js" />
/// <reference path="../libs/jquery-2.0.3.js" />

define(["jquery"], function ($) {
    var ui = (function () {

        function buildLoginForm() {
            var html =
                '<div id="login-form-holder">' +
                    '<form>' +
                        '<div id="login-form">' +
                            '<label for="tb-login-username">Username: </label>' +
                            '<input type="text" id="tb-login-username"><br />' +
                            '<label for="tb-login-password">Password: </label>' +
                            '<input type="password" id="tb-login-password"><br />' +
                            '<a href="#/create-game" id="btn-login" class="button">Login</a>' +
                        '</div>' +
                        '<div id="register-form" style="display: none">' +
                            '<label for="tb-register-username">Username: </label>' +
                            '<input type="text" id="tb-register-username"><br />' +
                            '<label for="tb-register-nickname">Nickname: </label>' +
                            '<input type="text" id="tb-register-nickname"><br />' +
                            '<label for="tb-register-password">Password: </label>' +
                            '<input type="password" id="tb-register-password"><br />' +
                            '<a href="#/create-game" id="btn-register" class="button">Register</a>' +
                        '</div>' +
                        '<button id="btn-show-login" class="button selected">Go to Login</button>' +
                        '<button id="btn-show-register" class="button">Go to Register</button>' +
                    '</form>' +
                    '<div id="error-messages"></div>' +
                '</div>';
            return html;
        }

        function buildGameUI(nickname) {
            var html = '<span id="user-nickname">' +
                    'Hello, ' + nickname +
            '</span> <br />' +
            '<a href="#/logout" id="btn-logout" class="menu-btn">Logout</a>' +
            '<a href="#/create-game" class="menu-btn">Create Game</a>' +
            '<a href="#/my-games" class="menu-btn">My Games</a>' +
            '<a href="#/open-games" class="menu-btn">Open Games</a>' +
            '<br />';

            return html;
        }

        function buildGameState(gameState) {
            var html =
                '<div id="game-state" data-game-id="' + gameState.id + '">' +
                    '<h2>' + gameState.title + '</h2>' +
                '</div>';
            return html;
        }

        function buildMessagesList(messages) {
            var list = '<ul class="messages-list"> MESAGES';
            var msg;
            for (var i = 0; i < messages.length; i += 1) {
                msg = messages[i];
                var item =
                    '<li>' +
                        '<a href="#" class="message-state-' + msg.state + '">' +
                            msg.text +
                        '</a>' +
                    '</li>';
                list += item;
            }
            list += '</ul>';
            return list;
        }

        return {
            gameUI: buildGameUI,
            loginForm: buildLoginForm,
            gameState: buildGameState,
            messagesList: buildMessagesList
        }

    }());

    return ui;
});
