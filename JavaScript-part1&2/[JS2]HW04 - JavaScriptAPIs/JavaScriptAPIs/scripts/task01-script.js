var TOTAL_RUBBISH = 3;
var TOP_PLAYERS = 5;
var rubbishCounter = 0;
var timer;
var currentTimeInSeconds = 0;
var elapsedTime = 0;

//Self-invoking functionality
(function () {
    var started = false;
    document.getElementById("start").addEventListener("click", function () {
        if (!started) {
            generateRubbish();            
            timer = setInterval(function () { showTimer(); }, 1000);
            started = true;            
        }        
    }, false);

    loadPairs();
})();

//Drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();   
}

function drag(ev) {
    ev.dataTransfer.setData("dragged-id", ev.target.id);
}

function drop(ev) {    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragged-id");
    ev.target.appendChild(document.getElementById(data));

    document.getElementById("closed").className = "visible";
    document.getElementById("open").className = "hidden";

    rubbishCounter++;

    if (rubbishCounter >= TOTAL_RUBBISH) {        
        endGame();
    }   
}

function dragEnter(ev) {
    document.getElementById("closed").className = "hidden";
    document.getElementById("open").className = "visible";
}

//New game functions
function showTimer() {
    currentTimeInSeconds++;
    document.getElementById("timer").innerHTML = currentTimeInSeconds;    
}

function generateRubbish() {
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    for (var i = 0; i < TOTAL_RUBBISH; i++) {
        var rubbish = document.createElement("div");
        rubbish.className = "rubbish";
        rubbish.id = "piece" + i;

        //The numbers should be changed if the playfield is resized
        var posLeft = getRandomInteger(230, 830);
        var posTop = getRandomInteger(10, 430);

        rubbish.style.left = posLeft + "px";
        rubbish.style.top = posTop + "px";

        rubbish.setAttribute("draggable", "true");
        rubbish.addEventListener("dragstart", drag);

        document.getElementById("field").appendChild(rubbish);
    }
}

//End game functions
function endGame() {
    elapsedTime = currentTimeInSeconds;
    clearInterval(timer);
    document.getElementById("board").className = "visible";
}

//Leaderboard functions
function loadPairs() {
    var sortedStorage = SortLocalStorage();

    if (!localStorage.length || localStorage.length == 0) {
        document.getElementById("pairs-container").innerHTML = "Scoreboard is empty";
        return;
    }

    //TODO: fix the display of scores
    var resultHTML = "<ul>";
    for (var i = 0; i < sortedStorage.length; i++) {
        if (i >= TOP_PLAYERS) {
            break;
        }
        var name = sortedStorage[i].name;
        var score = sortedStorage[i].score;
        resultHTML +=
        '<li>' +
        '{<strong>Name</strong>: "' + name + '", <strong>score</strong>: "' + score + '"}' +
        '</li>';
    }
    resultHTML += "</ul>";
    document.getElementById("pairs-container").innerHTML = resultHTML;
}

function onSaveButtonClick() {
    var key = document.getElementById("tb-key").value;
    var value = elapsedTime;
    localStorage.setItem(key, value);    
    loadPairs();
}

function onRemoveButtonClick() {
    var key = document.getElementById("tb-key").value;
    localStorage.removeItem(key);
    loadPairs();
}

function onClearStorageButtonClick() {
    localStorage.clear();    
    loadPairs();
}

function SortLocalStorage() {
    var localStorageArray = [];
    if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = parseInt(localStorage.getItem(localStorage.key(i)));
            localStorageArray.push({ name: key, score: value });
        }
    }
    var sortedArray = localStorageArray.sort(function (a, b) {
        var x = a[0];
        var y = b[0];
        return x - y;        
    });
    return sortedArray;
}