/// <reference path="underscore.js" />
/// <reference path="class.js" />

var Student = Class.create({
    init: function (fname, lname, age, marks) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.marks = marks;
    },
    toString: function () {
        return this.fname + " " + this.lname;
    }
});

var Animal = Class.create({
    init: function (species, family, numberOfLegs) {
        this.species = species;
        this.family = family;
        this.legCount = numberOfLegs;
    },
    toString: function () {
        return "species: " + this.species + '--> '
            + this.family + ', leg count: ' + this.legCount;
    }
});

var Book = Class.create({
    init: function (bookName, author) {
        this.bookName = bookName;
        this.author = author;
    },
    toString: function () {
        return this.bookName + ", by: " + this.author;
    }
});

var students = [
        new Student("Gosho", "Petrov", 12, [2, 4, 5]),
        new Student("Pesho", "Goshev", 22, [6, 5, 6]),
        new Student("Ivan", "Ivanov", 18),
        new Student("Strahil", "Krushev", 36),
        new Student("Orhan", "Murat", 14, [4, 3, 2, 5]),
        new Student("Gosho", "Murat", 14, [5, 3, 2, 5])
];

var animals = [
       new Animal("reptile", "crocodile", 4),
       new Animal("reptile", "amphibian", 6),
       new Animal("mammal", "wild cat", 4),
       new Animal("mammal", "chimpanzee", 2),
       new Animal("mammal", "6-legged guinee-pig", 6),
       new Animal("insect", "ant", 6),
       new Animal("insect", "spider", 8),
       new Animal("insect", "caterpilar", 100)
];

//task 1
function sortStudentsByFullName() {
    
    function isFirstNameBeforeLast(student) {
        if (student.fname < student.lname) {
            return true;
        }
    }

    var selection = _.filter(students, isFirstNameBeforeLast);
    var sorted = _.sortBy(selection, "lname").reverse();
    console.log(sorted.toString());
    
}

//task 2
function filterByAge() {

    function ageFilter(student) {
        if (student.age >= 18 && student.age <= 24) {
            return true;
        }
    }

    var selection = _.filter(students, ageFilter);
    _.each(selection, function (item) { console.log(item.toString() + " " +item.age)});
}

//task 3
function getHighestMarks() {    

    var selection = _.sortBy(students, function (st) {
        if (st.marks) {
            var sum = 0;
            for (var i = 0; i < st.marks.length; i++) {
                sum += st.marks[i];
            }
            return sum / st.marks.length;
        }
        else {
            return 0;
        }
    });

    console.log("Ordered by average marks: " + selection.reverse().toString());
}

//task 4
function animalsByLegCount() {
    var groupedAnimals = _.groupBy(_.sortBy(animals, "legCount"), "species");
    
    _.each(groupedAnimals, function (a) {
        console.log(a.toString());
    });
}

//task 5
function getTotalCount() {
    var totalCount = 0;

    _.each(animals, function (a) {
        totalCount += a.legCount;
    });
    console.log("Total legs of all animals: " + totalCount);
}

//task 6
function booksByAuthorPopularity() {
    var books = [
        new Book("Bad book", "Dan Brown"),
        new Book("Some book", "Earnest Hemingway"),
        new Book("Another book", "J.R.Tolkien"),
        new Book("Nice book", "J.R.Tolkien"),
        new Book("Ok book", "Dan Brown"),
        new Book("Awesome book", "J.R.Tolkien"),
    ];

    var authors = _.countBy(books, function (b) {
        return b.author;
    });

    var max = _.max(authors);

    var mostCommonAuthor = _.invert(authors);
    console.log(mostCommonAuthor[max] + " --> number of books " + max);
}

//task 7
//done with students instead of persons
function mostCommonNames() {
    //firstName
    var mostCommonFirstName = _.countBy(students, function (student) { return student.fname });
    var indexFirst = _.max(mostCommonFirstName);
    mostCommonFirstName = _.invert(mostCommonFirstName);
    console.log("Most common first name: " + mostCommonFirstName[indexFirst]);

    //lastName
    var mostCommonLastName = _.countBy(students, function (student) { return student.lname });
    var indexLast = _.max(mostCommonLastName);
    mostCommonLastName = _.invert(mostCommonLastName);
    console.log("Most common last name: " + mostCommonLastName[indexLast]);
}

