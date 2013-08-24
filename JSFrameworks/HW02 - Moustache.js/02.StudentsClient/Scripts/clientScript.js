/// <reference path="jquery-2.0.3.js" />
/// <reference path="http-requester.js" />
/// <reference path="mustache.js" />
/// <reference path="class.js" />

var allStudents = [];
var requestCompleted = false;

//Request student data
function getData(url) {
    httpRequest.getJSON(url, function (data) {
        renderStudentsHtml(data);
        console.log("Students successfully added");
    });
}

//save students to array and render html
function renderStudentsHtml(studentData) {
    var studentTemplate = Mustache.compile(document.getElementById("students-template").innerHTML);
    $("#content").append("<ul id='students'>");

    for (var i = 0; i < studentData.length; i++) {
        var stud = new Student(studentData[i].firstName, studentData[i].lastName, studentData[i].grade,
            studentData[i].age, studentData[i].marks)
        allStudents.push(stud);
        var studentHtml = studentTemplate(stud);
        $("#content #students").append(studentHtml);
    }
    $("#content").append("</ul>");
    $("#content").append("<div id='marks-container'></div>");
}

//render student marks on demand
function renderStudentMarks(student) {
    var marksTemplate = Mustache.compile(document.getElementById("marks-template").innerHTML);
    var markHtml = marksTemplate(student);
    $("#student-marks").append(markHtml);
}