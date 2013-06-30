function setScore(scoringPiece, enemyPiece) {
    $("#score-field #pieces").append(enemyPiece.visualize())
}

function registerMove(oldPosX, oldPosY, movedPiece) {
    var newPosX = movedPiece.posX;
    var newPosY = movedPiece.posY;
    var color = movedPiece.color;
    var type = movedPiece.constructor.name;

    var player = color == "white" ? "player White" : "player Black";
    var key = player + ": ";
    var value = type + " to " + "&#" + (newPosY+65) + " " + (8-newPosX);

    localStorage.setItem(key, value);
    //console.log(oldPosX + " " + oldPosY);
    //console.log(type);
    $("#score-field").append("<p>" + key + value + "</p>");
}
