/// <reference path="libs/_references.js" />

(function () {
    var appLayout = new kendo.Layout('<div id="nav"></div>' +
        '<div id="main-layout" class="fill"></div>');
    var everliveConfig = {
        appKey: "D5uhbdlXLCTQnU00",
        url: "https://api.everlive.com/v1/D5uhbdlXLCTQnU00/"
    };

    var persister = persisters.get(everliveConfig.url);
    var controls = ui.controls();
    vmFactory.setPersister(persister);

    var router = new kendo.Router();

    router.route("/", function () {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/login");
        } else {
            viewsFactory.getHomeView()
                .then(function (homeViewHtml) {
                    viewsFactory.getHomeNavBar()
                        .then(function (homeNavHtml) {

                            // The main home view-model, I presume it will display user's posts/comments
                            //var homeVm = vmFactory.getHomeVM(function () {
                            //});

                            var navView = new kendo.View(homeNavHtml);

                            var view = new kendo.View(homeViewHtml, {
                                //model: homeVm
                            });

                            // All other layouts should be rendered inside this one
                            appLayout.showIn("#nav", navView);
                            appLayout.showIn("#main-layout", view);
                            $('.nav .active').removeClass('active');
                            $('.nav a[href="#/"]').parent().addClass('active');
                        })
                })
        }
    });

    router.route("/login", function () {
        var displayName = persister.users.currentUser();

        if (displayName) {
            router.navigate("/");
        } else {
            var logSuccess = null,
                logError = null;

            logSuccess = function () {
                router.navigate("/");
            };
            logError = function (error) {
                controls.alertError('.form-signin', error);
            };

            RSVP.all([
                viewsFactory.getLoginNavBar(),
                viewsFactory.getLoginView(),
                vmFactory.getLoginVM(logSuccess, logError)
            ])
            .then(function (resultList) {
                var navView = null,
                    loginView = null,
                    navHtml = resultList[0],
                    loginHtml = resultList[1],
                    loginViewModel = resultList[2];

                navView = new kendo.View(navHtml);
                loginView = new kendo.View(loginHtml, {
                    model: loginViewModel
                });

                appLayout.showIn("#nav", navView);
                appLayout.showIn("#main-layout", loginView);
            });
        }
    });

    router.route("/register", function () {
        var displayName = persister.users.currentUser();

        if (displayName) {
            router.navigate("/");
        } else {
            var regSuccess = null,
                regError = null;

            regSuccess = function () {
                router.navigate("/");
            };
            regError = function (error) {
                controls.alertError('.form-signup', error);
            };

            RSVP.all([
                viewsFactory.getRegisterNavBar(),
                viewsFactory.getRegisterView(),
                vmFactory.getRegisterVM(regSuccess, regError)
            ]).then(function (resultList) {
                var navView = null,
                    registerView = null,
                    navHtml = resultList[0],
                    registerHtml = resultList[1],
                    registerViewModel = resultList[2];

                navView = new kendo.View(navHtml);
                registerView = new kendo.View(registerHtml, {
                    model: registerViewModel
                });

                appLayout.showIn("#nav", navView);
                appLayout.showIn("#main-layout", registerView);
            });
        }
    });

    router.route("/logout", function () {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/login");
        } else {
            persister.users.logout()
                .then(function () {
                    router.navigate("/login");
                });
        }
    });

    router.route("/posts", function () {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/login");
        } else {
            RSVP.all([
                viewsFactory.getHomeNavBar(),
                viewsFactory.getPostsView(),
                vmFactory.getPostsVM()
            ])
            .then(function (resultList) {
                var navView = null,
                    postsView = null,
                    navHtml = resultList[0],
                    postsHtml = resultList[1],
                    postsViewModel = resultList[2];

                navView = new kendo.View(navHtml);
                postsView = new kendo.View(postsHtml, {
                    model: postsViewModel
                });

                appLayout.showIn("#nav", navView);
                appLayout.showIn("#main-layout", postsView);
            });
        }
    });

    router.route("/posts/create", function () {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/");
        } else {
            var createPostSuccess = null,
                createPostError = null;

            createPostSuccess = function () {
                //TODO: navigate to post with id of the new post;
                router.navigate("/posts");
            };
            createPostError = function (error) {
                controls.alertError('.form-create-post', error);
            };

            RSVP.all([
                viewsFactory.getHomeNavBar(),
                viewsFactory.getCreatePostView(),
                vmFactory.getCreatePostVM(createPostSuccess, createPostError)
            ]).then(function (resultList) {
                var navView = null,
                    createPostView = null,
                    navHtml = resultList[0],
                    createPostHtml = resultList[1],
                    createPostViewModel = resultList[2];

                navView = new kendo.View(navHtml);
                createPostView = new kendo.View(createPostHtml, {
                    model: createPostViewModel
                });

                appLayout.showIn("#nav", navView);
                appLayout.showIn("#main-layout", createPostView);

                $('.nav .active').removeClass('active');
                $('.nav a[href="#/posts/create"]').parent().addClass('active');
            });
        }
    });

    router.route('/posts/:id', function (id) {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/login");
        } else {
            RSVP.all([
                viewsFactory.getHomeNavBar(),
                viewsFactory.getSinglePostView(),
                vmFactory.getSinglePostVM(id)
            ])
            .then(function (resultList) {
                var navView = null,
                    postView = null,
                    navHtml = resultList[0],
                    postHtml = resultList[1],
                    postViewModel = resultList[2];

                navView = new kendo.View(navHtml);
                postView = new kendo.View(postHtml, {
                    model: postViewModel
                });

                appLayout.showIn("#nav", navView);
                appLayout.showIn("#main-layout", postView);
            });
        }
    });

    //this will work only on exact matches - full title of the post, case sensitive!
    router.route('/posts/search/:key', function (key) {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/login");
        } else {
            RSVP.all([
                viewsFactory.getHomeNavBar(),
                viewsFactory.getPostsView(),
                vmFactory.getPostsByKeywordVM(key)
            ])
            .then(function (resultList) {
                var navView = null,
                    postsView = null,
                    navHtml = resultList[0],
                    postsHtml = resultList[1],
                    postsViewModel = resultList[2];

                navView = new kendo.View(navHtml);
                postsView = new kendo.View(postsHtml, {
                    model: postsViewModel
                });

                appLayout.showIn("#nav", navView);
                appLayout.showIn("#main-layout", postsView);
            });
        }
    });

    router.route("/admin", function () {
        var displayName = persister.users.currentUser();

        if (!displayName) {
            router.navigate("/login");
        }
        else {
            document.location.href = "/index-admin.html";
        }
    });
    
    $(function () {
        appLayout.render("#main-container");
        router.start();
    });
}());


