/// <reference path="../libs/_references.js" />

window.viewsFactory = (function () {
    var templates = {},
        rootUrl = "Scripts/partials/";

    function getTemplate(name) {
        var promise = new RSVP.Promise(function (resolve, reject) {

            if (templates[name]) {
                resolve(templates[name]);
            } else {
                $.ajax({
                    type: "GET",
                    url: rootUrl + name + ".html",
                    success: function (template) {
                        templates[name] = template;
                        resolve(template);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            }
        });

        return promise;
    }

    function getLoginView() {
        return getTemplate('form-login');
    };

    function getRegisterView() {
        return getTemplate('form-register');
    };

    function getHomeView() {
        return getTemplate('view-home');
    }

    function getPostsView() {
        return getTemplate('view-posts');
    }

    // TODO
    function getSinglePostView() {
        return getTemplate('view-posts-full');
    }

    function getLoginNavBar() {
        return getTemplate('login-nav-bar');
    }

    function getRegisterNavBar() {
        return getTemplate('register-nav-bar');
    }

    function getHomeNavBar() {
        return getTemplate('home-nav-bar');
    }

    function getCreatePostView() {
        return getTemplate('form-create-post');
    }

    return {
        getLoginView: getLoginView,
        getLoginNavBar: getLoginNavBar,
        getRegisterView: getRegisterView,
        getRegisterNavBar: getRegisterNavBar,
        getHomeView: getHomeView,
        getHomeNavBar: getHomeNavBar,
        getCreatePostView : getCreatePostView,
        getPostsView: getPostsView,
        getSinglePostView: getSinglePostView
    };
}());