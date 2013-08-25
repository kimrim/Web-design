/// <reference path="libs/require.js" />
require.config({
	paths: {
		jquery: "libs/jquery-2.0.3",
		rsvp: "libs/rsvp.min",
		httpRequester: "libs/http-requester",
		mustache: "libs/mustache"
	}
});

require(["jquery", "mustache", "app/data-persister", "app/controls"], function ($, mustache, data, controls) {
    //initialize and display student data
	data.students()
		.then(function (students) {
		    //console.log(people);
			var personTemplateString = $("#student-template").html();

			var template = mustache.compile(personTemplateString);

			var comboView = controls.comboView(students);
			var comboViewHtml = comboView.render(template, "student");
			$("#wrapper").html(comboViewHtml);
			$("#wrapper").append("<div id='marks-container'></div>");

		}, function (err) {
			console.error(err);
		});

    //adding click events and combo view functionality
	$("#wrapper").on("click", "li.student div", function () {
	    var listItem = $(this).parent();
	    if (listItem.hasClass("selected")) {
	        $("#marks-container").empty();
	        listItem.removeClass("selected")
	        $(".student").show('slow');
	    }
	    else {
	        listItem.addClass("selected")
	        $(".student").not(listItem).hide('slow');

	        var studentId = listItem.attr('id');

            //getting and displaying marks for the selected student
	        data.marks(studentId).then(function (data) {
	            var marksTemplate = $("#marks-template").html();
	            var template = mustache.compile(marksTemplate);

	            var marksHtml = template(data);
	            $("#marks-container").empty();
	            $("#marks-container").append(marksHtml);
	        });
	    }
	});

});