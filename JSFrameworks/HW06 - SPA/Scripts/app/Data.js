/// <reference path="../libs/_references.js" />

window.persisters = (function () {

    var displayName = localStorage.getItem("displayName");
    var sessionKey = localStorage.getItem("sessionKey");
    var principal_id = localStorage.getItem("principal_id");

    function saveUserData(name, userData) {
        localStorage.setItem('displayName', name);
        localStorage.setItem('sessionKey', userData.Result.access_token);
        localStorage.setItem('principal_id', userData.Result.principal_id);
        displayName = name;
        sessionKey = userData.result.access_token
    };

    function clearUserData() {
        localStorage.removeItem("displayName");
        localStorage.removeItem("sessionKey");
        localStorage.removeItem("principal_id");
        displayName = "";
        sessionKey = "";
        principal_id = "";
    };

    var MainPersister = Class.create({
        init: function (serviceUrl) {
            this.users = new UserPersister(serviceUrl);
            this.posts = new PostPersister(serviceUrl + 'Posts');
            this.tags = new TagPersister(serviceUrl + 'Tags')
        }
    })

    var UserPersister = Class.create({
        init: function (serviceUrl) {
            this.serviceUrl = serviceUrl;
        },
        register: function (username, displayName, password) {
            //var user = {
            //    "Username": "jsmith",
            //    "Password": "111111",
            //    "DisplayName": "John Smith",
            //    "Email": "john.smith@telerik.com"
            //}

            var userData = {
                    "Username": username,
                    "DisplayName": displayName,
                    "Password": CryptoJS.SHA1(password).toString(),
                    "Email": username + "@telerik.com"                    
                };

            return httpRequester.postJSON(this.serviceUrl + 'Users', userData)
                .then(function (data) {
                    console.log(data);
                    saveUserData(username, data);
                    return data;
                });
        },
        login: function (username, password) {
            
            var userData = {
                username: username,
                password: CryptoJS.SHA1(password).toString(),
                "grant_type": "password"
            };

            return httpRequester.postJSON(this.serviceUrl + 'oauth/token', userData)
                .then(function (data) {
                    console.log(data);
                    saveUserData(username, data);
                    return data;
                });
        },
        logout: function () {
            var url = this.serviceUrl + 'Users/${' + principal_id +'}';
            clearUserData();

            return httpRequester.putJSON(url);
        },
        currentUser: function () {
            return displayName;
        }
    })

    var PostPersister = Class.create({
        init: function (serviceUrl) {
            this.serviceUrl = serviceUrl;
            this.header = {"Authorization": "Bearer " + sessionKey };
        },

        getAll: function () {
            var url = this.serviceUrl;
            return httpRequester.getJSON(url, this.header);
        },

        //getMine: function () {
        //    var url = this.serviceUrl + '/mine?sessionKey=' + sessionKey;
        //    return httpRequester.getJSON(url);
        //},

        getPostById: function (postId) {
            var url = this.serviceUrl + '/' + postId;
            return httpRequester.getJSON(url, this.header);
        },

        getPostsByKeyword: function (keyword) {
            var url = this.serviceUrl;            
            var filterHeader = { "Authorization": "Bearer " + sessionKey, "X-Everlive-Filter": JSON.stringify({ "Title": keyword }) };
            return httpRequester.getJSON(url, filterHeader);
        },

        create: function (title, text, tags) {
            var url = this.serviceUrl;
            var postData = {
                    "Title": title,
                    "Content": text,
                    "Tags": tags
                };

            if (tags) {
                postData.tags = tags.split(',').clean('');
            }

            return httpRequester.postJSON(url, postData, this.header);
        },

        // ??? - not implemented
        comment: function (post) {
            var url = this.serviceUrl + '/' + post.id + '/comment?sessionKey=' + sessionKey;
            httpRequester.putJSON(url, post);
        },
    });

    // ??? - not implemented
    var TagPersister = Class.create({
        init: function (serviceUrl) {
            this.serviceUrl = serviceUrl;
        },

        getAll: function () {
            var url = this.serviceUrl + '?sessionKey=' + sessionKey;
            var tags = httpRequester.getJSON(url);
            return tags;
        },

        // TODO - the service is not implemented in WebAPI
        // GET api/tags/{tagId}/posts 
        getPostsByTag: function (tagId) {
            var url = this.serviceUrl + '/' + tagId + '/posts?sessionKey=' + sessionKey;
            var tags = httpRequester.getJSON(url);
            return tags;
        }
    });

    return {
        get: function (url) {
            return new MainPersister(url);
        }
    }
}());