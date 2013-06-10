function Student(fname, lname, grade) {
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
}

function generateTable(students) {
    var table = $("<table></table>");
    table.append("<th>First name</th>", "<th>Last name</th>", "<th>Grade</th>")

    for (var i = 0; i < students.length; i++) {
        var row = $("<tr></tr>").addClass("student");
        var fnameCell = $("<td></td>").text(students[i].fname);
        var lnameCell = $("<td></td>").text(students[i].lname);
        var gradeCell = $("<td></td>").text(students[i].grade);

        row.append(fnameCell, lnameCell, gradeCell);
        row.appendTo(table);
    }

    $("#wrapper").append(table);
}

var pesho = new Student("Pesho", "Peshev", 4);
var gosho = new Student("Gosho", "Goshev", 6);
var misho = new Student("Misho", "Mihalev", 8);

generateTable([pesho, gosho, misho]);