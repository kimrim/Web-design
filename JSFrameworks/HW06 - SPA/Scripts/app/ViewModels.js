/// <reference path="../libs/_references.js" />

window.vmFactory = (function () {
    var data = null;

    function getLoginViewModel(successCallback, errorCallback) {
        var viewModel = {
            login: function () {
                var username = this.get("username"),
                    password = this.get("password");

                data.users.login(username, password)
					.then(function () {
					    if (successCallback) {
					        successCallback();
					    }
					}, function (error) {
					    if (errorCallback) {
					        errorCallback(error);
					    }
					});
            }
        };

        return kendo.observable(viewModel);
    };

    function getRegisterViewModel(successCallback, errorCallback) {
        var viewModel = {
            register: function () {
                var username = this.get("username"),
                    displayName = this.get("displayName"),
                    password = this.get("password");

                data.users.register(username, displayName, password)
					.then(function () {
					    if (successCallback) {
					        successCallback();
					    }
					}, function (error) {
					    if (errorCallback) {
					        errorCallback(error);
					    }
					});
            }
        };

        return kendo.observable(viewModel);
    }

    function getCreatePostViewMode(successCallback, errorCallback) {
        var viewModel = {
            create: function () {
                var title = this.get("title"),
                    text = this.get("text"),
                    tags = this.get("tags");

                data.posts.create(title, text, tags)
                    .then(function () {
                        if (successCallback) {
                            successCallback();
                        }
                    }, function (error) {
                        if (errorCallback) {
                            errorCallback(error);
                        }
                    });
            }
        };

        return kendo.observable(viewModel);
    }

    function getPostsViewModel() {
        //data = fakePersister.get("someurl");
        return data.posts.getAll()
			.then(function (posts) {
			    var viewModel = {
			        posts: posts.Result,
			        message: ""
			    };

			    return kendo.observable(viewModel);
			});
    }

    function getSinglePostViewModel(id) {
        return data.posts.getPostById(id)
			.then(function (post) {
			    var viewModel = {
			        post: post.Result,
			        message: ""
			    };

			    return kendo.observable(viewModel);
			});
    }

    function getPostsByKeywordViewModel(keyWord) {
        return data.posts.getPostsByKeyword(keyWord)
			.then(function (posts) {
			    var viewModel = {
			        posts: posts.Result,
			        message: ""
			    };

			    return kendo.observable(viewModel);
			});
    }

    return {
        getLoginVM: getLoginViewModel,
        getRegisterVM: getRegisterViewModel,
        getPostsVM: getPostsViewModel,
        getSinglePostVM: getSinglePostViewModel,
        getCreatePostVM: getCreatePostViewMode,
        getPostsByKeywordVM: getPostsByKeywordViewModel,
        setPersister: function (persister) {
            data = persister;
        }
    };
}());