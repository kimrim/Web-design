function slideShow() {
    var active = $("#slider div.active");
    if (active.length == 0) {
        active = $("#slider div:last");
    }

    var next = active.next();
    if (next.length == 0) {
        next = $("#slider div:first");
    }
    next.css({ opacity: 0 });

    active.addClass("last-active");
    next.addClass("active").animate({ opacity: 1.0 }, 1000, function () {
        active.removeClass("active last-active");
    });
}

(function () {
    var buttonPrev = $("button#prev");
    var buttonNext = $("button#next");
    var TIMEOUT = 3000;
    var timer = null;

    buttonPrev.on("click", function () {
        clearInterval(timer);

        var currElement = $("#slider div.active");
        var prev = currElement.prev();
        if (prev.length == 0) {
            prev = $("#slider div:last");
        }

        currElement.removeClass("active");
        prev.addClass("active");

        timer = setInterval("slideShow()", TIMEOUT);
    });

    buttonNext.on("click", function () {
        clearInterval(timer);

        var currElement = $("#slider div.active");
        var next = currElement.next();
        if (next.length == 0) {
            next = $("#slider div:first");
        }

        currElement.removeClass("active");
        next.addClass("active");

        timer = setInterval("slideShow()", TIMEOUT);
    });

    timer = setInterval("slideShow()", TIMEOUT);
})();