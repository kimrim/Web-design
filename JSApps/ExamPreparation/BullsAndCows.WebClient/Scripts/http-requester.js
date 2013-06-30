/// <reference path="Scripts/jquery-2.0.2.js" />
/// <reference path="Scripts/class.js" />

var httpRequest = (function () {
    function getJSON(url, success, error) {
        $.ajax({
            url: url,
            type: "GET",
            timeout: 5000,
            contentType: "application/json",        //include this line to avoid potential Errors
            success: success,
            error: error
        });
    }

    function postJSON(url, data, success, error) {
        $.ajax({
            url: url,
            type: "POST",
            timeout: 5000,
            contentType: "application/json",
            data: JSON.stringify(data),           //stringify the data to JSON to avoid errors (because the server always expects JSON data)
            success: success,
            error: error
        });
    }

    return {
        getJSON: getJSON,
        postJSON: postJSON
    }
}());