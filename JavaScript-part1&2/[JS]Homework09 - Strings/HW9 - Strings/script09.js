(function () {
    function PrintResult(result) {
        document.getElementById("result").innerHTML = result;
        //alert(result);
    }

    //Task 1
    var button1 = document.getElementById("butt1");
    button1.addEventListener("click", function () {
        var input = prompt("Enter a string", "jack black");
        var result = "";
        for (var i = 0; i < input.length; i++) {
            result += input[input.length - 1 - i];
        }
        
        PrintResult(result.toString());
    });

    //Task 2
    var button2 = document.getElementById("butt2");
    button2.addEventListener("click", function () {
        var test = ")(a+b)/5-d)";
        var openBracket = 0;
        var correct = true;
        var result;

        for (var i = 0; i < test.length; i++) {
            
            if (test[i] == "(") {
                openBracket++;                
            }
            if (test[i] == ")") {                
                openBracket--;
            }
            if (openBracket < 0) correct = false;
        }

        if (openBracket == 0 && correct) {
            result = "Brackets are correct";
        }
        else {
            result = "Brackets are wrong!";
        }

        PrintResult(result);
    });

    //Task 3
    var button3 = document.getElementById("butt3");
    button3.addEventListener("click", function () {
        var str = "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."
        var result = str.match(/in/gi);

        PrintResult("The number of 'in's in the string is: " + result.length);
    });

    //Task 4
    var button4 = document.getElementById("butt4");
    button4.addEventListener("click", function () {

        function setUpper(match) { return match.toUpperCase(); }
        function setLower(match) { return match.toLowerCase(); }
        function setMixed(match) { 
            var strMatch = match.toString();
            var mixed = "";
            for (var i = 0; i < strMatch.length; i++) {
                if (i % 2 == 0) mixed += strMatch[i].toLowerCase();
                else mixed += strMatch[i].toUpperCase();
            }
            return mixed;
        }

        var str = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>ANYthing</lowcase> else.";
        var result = str.replace(/<upcase>(.*?)<\/upcase>/g, setUpper);
        result = result.replace(/<lowcase>(.*?)<\/lowcase>/g, setLower);
        result = result.replace(/<mixcase>(.*?)<\/mixcase>/g, setMixed);

        PrintResult(result);
    });

    //Task 5
    var button5 = document.getElementById("butt5");
    button5.addEventListener("click", function () {
        var text = "Some random   text with        many spaces";
        var result;

        result = text.replace(/\s+/g, "&ampnbsp");
        PrintResult(result);
    });

    //Task 6
    var button6 = document.getElementById("butt6");
    button6.addEventListener("click", function () {
        
        var text = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
        var result = text.replace(/<[A-z0-9]*>/g, "");
        
        PrintResult(result);
    });

    //Task 7
    var button7 = document.getElementById("butt7");
    button7.addEventListener("click", function () {

        var url = "http://www.devbg.org/forum/index.php";
        var result = "";

        var indexProt = url.indexOf(':');
        var protocol = url.substring(0, indexProt);
        
        var indexServ = url.indexOf('/', indexProt + 3);
        var server = url.substring(indexProt + 3, indexServ - indexProt + 4);
            
        var resource = url.substring(indexServ);

        result += "{protocol: " + "'" + protocol + "'," + "<br>";
        result += "server: " + "'" + server + "'," + "<br>";
        result += "resource: " + "'" + resource + "'" + "}";

        PrintResult(result);
    });

    //Task 8
    var button8 = document.getElementById("butt8");
    button8.addEventListener("click", function () {
        function urlCallback(matchStart, matchEnd) {
            return "[URL=" + matchEnd  + "]" + matchStart + "[/URL]";
        }

        var text = "<p>Please visit <a href='http://academy.telerik. com'>our site</a> to choose a training course. Also visit <a href='www.devbg.org'>our forum</a> to discuss the courses.</p>";
        var result = text.replace(/<a href='(.*?)'>(.*?)<\/a>/g, urlCallback);
        
        PrintResult(result);
    });

    //Task 9
    var button9 = document.getElementById("butt9");
    button9.addEventListener("click", function () {
        var emails = "Beginning ala@abv.bg, some other text bewteeen, yalala@yahoo.co.uk.";
        var result = emails.match(/[^\s]+@[^\s]+\.\w+/g);

        PrintResult(result);
    });

    //Task 10
    var button10 = document.getElementById("butt10");
    button10.addEventListener("click", function () {

        String.prototype.isPalindrome = function () {
            var word = this.toLowerCase();
            for (var i = 0; i < word.length / 2; i++)
            {
                if (word[i] != word[word.length - 1 - i])
                {
                    return false;
                }
            }
            return true;
        }

        var text = "If you eat bob. and go to an ABBA concert, you will earn a level? Wow!";
        var result = "Palindromes: ";
        var words = text.split(/[.,!?\s]+/g);

        for (var i = 0; i < words.length; i++) {
            if (words[i] != "" && words[i].isPalindrome()) result += words[i] + ", ";
        }
        
        PrintResult(result);
    });

    //Task 11
    var button11 = document.getElementById("butt11");
    button11.addEventListener("click", function () {
        function stringFormat() {
            var input = arguments[0];

            for (var i = 1; i < arguments.length; i++) {
                var pattern = "\\{" + (i-1) + "\\}";
                input = input.replace(new RegExp(pattern, "g"), arguments[i]);
            }
            return input;
        }

        var format = "{0}, {1}, {0} text {2}";
        var str = stringFormat(format, 1, "Pesho", "Gosho");
        PrintResult(str);
    });

    //Task 12
    var button12 = document.getElementById("butt12");
    button12.addEventListener("click", function () {

        function generateList(people, template) {
            var result = "<ul>";

            for (var i = 0; i < people.length; i++) {
                var matches = template.replace(/{(\w+)}/gi, function () { return people[i][arguments[1]]; });
                result += "<li>";
                result += matches;
                result += "</li>";
            }
            result += "</ul>";
            return result.toString();
        }

        var people = [{ name: "John", age: 14 }, { name: "Stamat", age: 28 }, { name: "Bob", age: 87 }, { name: "Kolyo", age: 7 }];

        var template = document.getElementById('list-item').innerHTML;
        var peopleList = generateList(people, template);        

        console.log(peopleList);
        PrintResult("Look for the output on the console!");
    });

})()