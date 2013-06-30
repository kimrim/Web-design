var pieceController = (function () {
    kings = new Array();
    piecesLeft = new Array();
    function InitailPiecesGenerator() {


        this.init = function () {
            var pieces = createArray(8, 8);

            //Black pieces fill
            pieces[0][0] = new Rook("black", 0, 0);
            pieces[0][1] = new Knight("black", 0, 1);
            pieces[0][2] = new Bishop("black", 0, 2);
            pieces[0][3] = new Queen("black", 0, 3);
            pieces[0][4] = new King("black", 0, 4);
            pieces[0][5] = new Bishop("black", 0, 5);
            pieces[0][6] = new Knight("black", 0, 6);
            pieces[0][7] = new Rook("black", 0, 7);

            kings.push(new King("black", 0, 4));

            for (var i = 0; i < 8; i++) {
                pieces[1][i] = new Pawn("black", 1, i);
            }

            //Black pieces fill
            pieces[7][0] = new Rook("white", 7, 0);
            pieces[7][1] = new Knight("white", 7, 1);
            pieces[7][2] = new Bishop("white", 7, 2);
            pieces[7][3] = new Queen("white", 7, 3);
            pieces[7][4] = new King("white", 7, 4);
            pieces[7][5] = new Bishop("white", 7, 5);
            pieces[7][6] = new Knight("white", 7, 6);
            pieces[7][7] = new Rook("white", 7, 7);

            kings.push(new King("white", 7, 4));

            for (var i = 0; i < 8; i++) {
                pieces[6][i] = new Pawn("white", 6, i);
            }

            piecesLeft[0] = 16;
            piecesLeft[1] = 16;
            return pieces;

        }

        function createArray(length) {
            var arr = new Array(length || 0),
            i = length;

            if (arguments.length > 1) {
                var args = Array.prototype.slice.call(arguments, 1);
                while (i--) arr[length - 1 - i] = createArray.apply(this, args);
            }

            return arr;

            return pieces;
        }
    }

    function Piece(color, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;

        this.allowsCheck = function (params) {
            var that = this;
            var board = params.board;
            var positionX = params.positionX;
            var positionY = params.positionY;
            var newX = params.newX;
            var newY = params.newY;

            var kingPosX = 0;
            var kingPosY = 0;

            if (this.constructor.name != "King") {
                if (this.color == 'white') {
                    kingPosX = kings[1].posX;
                    kingPosY = kings[1].posY;
                } else if (this.color == 'black') {
                    kingPosX = kings[0].posX;
                    kingPosY = kings[0].posY;
                }
            } else {
                kingPosY = newY;
                kingPosX = newX;
            }

            var underCheck = false;
            var possiblePath = false;

            var indexY = kingPosY;
            for (var indexX = 0; indexX < kingPosX; indexX++) {
                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Rook") && board[indexX][indexY].color != this.color) {
                        possiblePath = true;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }


                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath) {
                underCheck = true;
            }

            indexY = kingPosY;
            for (var indexX = 7; indexX > kingPosX; indexX--) {
                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Rook") && board[indexX][indexY].color != this.color) {
                        possiblePath = true;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath) {
                underCheck = true;
            }

            var indexX = kingPosX;
            for (var indexY = 0; indexY < kingPosY; indexY++) {
                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Rook") && board[indexX][indexY].color != this.color) {
                        possiblePath = true;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath) {
                underCheck = true;
            }

            indexX = kingPosX;
            for (var indexY = 7; indexY > kingPosY; indexY--) {
                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Rook") && board[indexX][indexY].color != this.color) {
                        possiblePath = true;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath) {
                underCheck = true;
            }

            indexX = kingPosX;
            possiblePath = true;
            var enemyPeace = false;
            for (var indexY = kingPosY - 1; indexY > 0; indexY--) {

                if (indexX == 0) {
                    break;
                }

                indexX--;

                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Bishop") && board[indexX][indexY].color != this.color) {
                        enemyPeace = true;
                        break;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath && enemyPeace) {
                underCheck = true;
            }

            indexX = kingPosX;
            possiblePath = true;
            var enemyPeace = false;
            for (var indexY = kingPosY + 1; indexY < 8; indexY++) {

                if (indexX == 7) {
                    break;
                }

                indexX++;

                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Bishop") && board[indexX][indexY].color != this.color) {
                        enemyPeace = true;
                        break;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath && enemyPeace) {
                underCheck = true;
            }

            indexX = kingPosX;
            possiblePath = true;
            var enemyPeace = false;
            for (var indexY = kingPosY + 1; indexY < 8; indexY++) {

                if (indexX == 0) {
                    break;
                }

                indexX--;

                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Bishop") && board[indexX][indexY].color != this.color) {
                        enemyPeace = true;
                        break;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath && enemyPeace) {
                underCheck = true;
            }

            indexX = kingPosX;
            possiblePath = true;
            var enemyPeace = false;
            for (var indexY = kingPosY - 1; indexY > 0; indexY--) {

                if (indexX == 7) {
                    break;
                }

                indexX++;

                if (typeof (board[indexX][indexY]) != "undefined") {
                    if ((board[indexX][indexY].constructor.name == "Queen" || board[indexX][indexY].constructor.name == "Bishop") && board[indexX][indexY].color != this.color) {
                        enemyPeace = true;
                        break;
                    }
                    else {
                        if (indexX != positionX || indexY != positionY) {
                            possiblePath = false;
                        }
                    }
                }

                if (indexX == newX && indexY == newY) {
                    possiblePath = false;
                }
            }

            if (possiblePath && enemyPeace) {
                underCheck = true;
            }

            if ((kingPosX - 2) >= 0 && (kingPosY + 1) >= 0 && (kingPosX - 2) <= 7 && (kingPosY + 1) <= 7) {
                if (typeof (board[kingPosX - 2][kingPosY + 1]) != "undefined") {
                    if (that.color != board[kingPosX - 2][kingPosY + 1].color && board[kingPosX - 2][kingPosY + 1].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX - 2) >= 0 && (kingPosY - 1) >= 0 && (kingPosX - 2) <= 7 && (kingPosY - 1) <= 7) {
                if (typeof (board[kingPosX - 2][kingPosY - 1]) != "undefined") {
                    if (that.color != board[kingPosX - 2][kingPosY - 1].color && board[kingPosX - 2][kingPosY - 1].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX + 2) >= 0 && (kingPosY + 1) >= 0 && (kingPosX + 2) <= 7 && (kingPosY + 1) <= 7) {
                if (typeof (board[kingPosX + 2][kingPosY + 1]) != "undefined") {
                    if (that.color != board[kingPosX + 2][kingPosY + 1].color && board[kingPosX + 2][kingPosY + 1].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX + 2) >= 0 && (kingPosY - 1) >= 0 && (kingPosX + 2) <= 7 && (kingPosY - 1) <= 7) {
                if (typeof (board[kingPosX + 2][kingPosY - 1]) != "undefined") {
                    if (that.color != board[kingPosX + 2][kingPosY - 1].color && board[kingPosX + 2][kingPosY - 1].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX + 1) >= 0 && (kingPosY - 2) >= 0 && (kingPosX + 1) <= 7 && (kingPosY - 2) <= 7) {
                if (typeof (board[kingPosX + 1][kingPosY - 2]) != "undefined") {
                    if (that.color != board[kingPosX + 1][kingPosY - 2].color && board[kingPosX + 1][kingPosY - 2].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX - 1) >= 0 && (kingPosY - 2) >= 0 && (kingPosX - 1) <= 7 && (kingPosY - 2) <= 7) {
                if (typeof (board[kingPosX - 1][kingPosY - 2]) != "undefined") {
                    if (that.color != board[kingPosX - 1][kingPosY - 2].color && board[kingPosX - 1][kingPosY - 2].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX + 1) >= 0 && (kingPosY + 2) >= 0 && (kingPosX + 1) <= 7 && (kingPosY + 2) <= 7) {
                if (typeof (board[kingPosX + 1][kingPosY + 2]) != "undefined") {
                    if (that.color != board[kingPosX + 1][kingPosY + 2].color && board[kingPosX + 1][kingPosY + 2].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if ((kingPosX - 1) >= 0 && (kingPosY + 2) >= 0 && (kingPosX - 1) <= 7 && (kingPosY + 2) <= 7) {
                if (typeof (board[kingPosX - 1][kingPosY + 2]) != "undefined") {
                    if (that.color != board[kingPosX - 1][kingPosY + 2].color && board[kingPosX - 1][kingPosY + 2].constructor.name == "Knight") {
                        underCheck = true;
                    }
                }
            }

            if (this.color == 'black') {
                if ((kingPosX + 1) >= 0 && (kingPosY + 1) >= 0 && (kingPosX + 1) <= 7 && (kingPosY + 1) <= 7) {
                    if (typeof (board[kingPosX + 1][kingPosY + 1]) != "undefined") {
                        if (that.color != board[kingPosX + 1][kingPosY + 1].color && board[kingPosX + 1][kingPosY + 1].constructor.name == "Pawn") {
                            underCheck = true;
                        }
                    }
                }

                if ((kingPosX + 1) >= 0 && (kingPosY - 1) >= 0 && (kingPosX + 1) <= 7 && (kingPosY - 1) <= 7) {
                    if (typeof (board[kingPosX + 1][kingPosY - 1]) != "undefined") {
                        if (that.color != board[kingPosX + 1][kingPosY - 1].color && board[kingPosX + 1][kingPosY - 1].constructor.name == "Pawn") {
                            underCheck = true;
                        }
                    }
                }
            }
            else {
                if ((kingPosX - 1) >= 0 && (kingPosY + 1) >= 0 && (kingPosX - 1) <= 7 && (kingPosY + 1) <= 7) {
                    if (typeof (board[kingPosX - 1][kingPosY + 1]) != "undefined") {
                        if (that.color != board[kingPosX - 1][kingPosY + 1].color && board[kingPosX - 1][kingPosY + 1].constructor.name == "Pawn") {
                            underCheck = true;
                        }
                    }
                }

                if ((kingPosX - 1) >= 0 && (kingPosY - 1) >= 0 && (kingPosX - 1) <= 7 && (kingPosY - 1) <= 7) {
                    if (typeof (board[kingPosX - 1][kingPosY - 1]) != "undefined") {
                        if (that.color != board[kingPosX - 1][kingPosY - 1].color && board[kingPosX - 1][kingPosY - 1].constructor.name == "Pawn") {
                            underCheck = true;
                        }
                    }
                }
            }

            return underCheck;
        }
    }

    function Rook(color, posX, posY) {
        var self = this;
        Piece.call(this, color, posX, posY);

        this.visualize = function () {
            if (color == "white") {
                return "<span>&#9814</span>";
            }
            else if (color == "black") {
                return "<span>&#9820</span>";
            }
        }

        this.validate = function (board, positionX, positionY) {
            var isValid = false;
            var min = 0;
            var max = 0;
            var isPathClean = false;

            if (self.posX == positionX) {
                if (self.posY > positionY) {
                    min = positionY;
                    max = self.posY;

                    for (var i = min; i < max; i++) {
                        if (typeof (board[positionX][i]) == "undefined" || i == positionY) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                } else {
                    max = positionY;
                    min = self.posY;

                    for (var i = min + 1; i <= max; i++) {
                        if (typeof (board[positionX][i]) == "undefined" || i == positionY) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                }

            } else if (self.posY == positionY) {
                if (self.posX > positionX) {
                    min = positionX;
                    max = self.posX;

                    for (var i = min; i < max; i++) {
                        if (typeof (board[i][positionY]) == "undefined" || i == positionX) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                } else {
                    max = positionX;
                    min = self.posX;

                    for (var i = min + 1; i <= max; i++) {
                        if (typeof (board[i][positionY]) == "undefined" || i == positionX) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                }
            }
            debugger;
            if (isPathClean) {
                isValid = isPathClear(board, self, positionX, positionY);
            }

            return isValid;
        }
    }

    function Knight(color, posX, posY) {
        var self = this;
        Piece.call(this, color, posX, posY);

        this.visualize = function () {
            if (color == "white") {
                return "<span>&#9816</span>";
            }
            else if (color == "black") {
                return "<span>&#9822</span>";
            }
        }

        this.validate = function (board, positionX, positionY) {
            var isValid = false;

            if (self.posX == positionX - 2 && self.posY == positionY + 1) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX - 2 && self.posY == positionY - 1) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX + 2 && self.posY == positionY + 1) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX + 2 && self.posY == positionY - 1) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX + 1 && self.posY == positionY - 2) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX - 1 && self.posY == positionY - 2) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX + 1 && self.posY == positionY + 2) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            } else if (self.posX == positionX - 1 && self.posY == positionY + 2) {
                if (validateNonEmptyPos(board, positionX, positionY)) {
                    isValid = true;
                }
            }

            return isValid;
        }

        function validateNonEmptyPos(board, positionX, positionY) {
            if (typeof (board[positionX][positionY]) == "undefined") {
                return true;
            } else if (self.color != board[positionX][positionY].color) {
                Capture(positionX, positionY, self);
                isValid = true;
                return true;
            }
        }
    }

    function Bishop(color, posX, posY) {
        var self = this;
        Piece.call(this, color, posX, posY);

        this.visualize = function () {
            if (color == "white") {
                return "<span>&#9815</span>";
            }
            else if (color == "black") {
                return "<span>&#9821</span>";
            }
        }

        this.validate = function (board, positionX, positionY) {
            var isValid = false;
            var isPathClean = false;

            var minX = positionX;
            var maxX = self.posX;
            var minY = positionY;
            var maxY = self.posY;

            var incrementer = 1;
            var inclusivePosition = 0;
            var indexY = minY;

            if (self.posX > positionX && self.posY > positionY) {
                indexY = minY;
                incrementer = 1;
                inclusivePosition = 0;

            } else if (self.posX > positionX && self.posY < positionY) {
                minX = positionX;
                maxX = self.posX;
                minY = self.posY;
                maxY = positionY;

                indexY = maxY;
                incrementer = -1;
                inclusivePosition = 0;

            } else if (self.posX < positionX && self.posY < positionY) {
                minX = self.posX;
                maxX = positionX;
                minY = self.posY;
                maxY = positionY;

                indexY = minY + 1;
                incrementer = 1;
                inclusivePosition = 1;

            } else if (self.posX < positionX && self.posY > positionY) {
                minX = self.posX;
                maxX = positionX;
                minY = positionY;
                maxY = self.posY;

                indexY = maxY - 1;
                incrementer = -1;
                inclusivePosition = 1;
            }

            if (maxY - minY == maxX - minX) {
                for (var indexX = minX + inclusivePosition; indexX < maxX + inclusivePosition; indexX++) {

                    if (typeof (board[indexX][indexY]) == "undefined" || (indexX == positionX && indexY == positionY)) {
                        isPathClean = true;
                    }
                    else {
                        isPathClean = false;
                        break;
                    }
                    indexY += incrementer;
                }
            }
            debugger;
            if (isPathClean) {
                isValid = isPathClear(board, self, positionX, positionY);
            }

            return isValid;
        }

    }

    function Queen(color, posX, posY) {
        var self = this;
        Piece.call(this, color, posX, posY);

        this.visualize = function () {
            if (color == "white") {
                return "<span>&#9813</span>";
            }
            else if (color == "black") {
                return "<span>&#9819</span>";
            }
        }

        this.validate = function (board, positionX, positionY) {
            var isValid = false;
            var isPathClean = false;

            if (self.posX == positionX) {
                var min = 0;
                var max = 0;

                if (self.posY > positionY) {
                    min = positionY;
                    max = self.posY;

                    for (var i = min; i < max; i++) {
                        if (typeof (board[positionX][i]) == "undefined" || i == positionY) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                } else {
                    max = positionY;
                    min = self.posY;

                    for (var i = min + 1; i <= max; i++) {
                        if (typeof (board[positionX][i]) == "undefined" || i == positionY) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                }

            } else if (self.posY == positionY) {
                var min = 0;
                var max = 0;

                if (self.posX > positionX) {
                    min = positionX;
                    max = self.posX;

                    for (var i = min; i < max; i++) {
                        if (typeof (board[i][positionY]) == "undefined" || i == positionX) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                } else {
                    max = positionX;
                    min = self.posX;

                    for (var i = min + 1; i <= max; i++) {
                        if (typeof (board[i][positionY]) == "undefined" || i == positionX) {
                            isPathClean = true;
                        }
                        else {
                            isPathClean = false;
                            break;
                        }
                    }
                }
            }
            else {

                if (self.posX > positionX && self.posY > positionY) {
                    var minX = positionX;
                    var maxX = self.posX;
                    var minY = positionY;
                    var maxY = self.posY;

                    if (maxY - minY == maxX - minX) {
                        var indexY = minY;
                        for (var indexX = minX; indexX < maxX; indexX++) {

                            if (typeof (board[indexX][indexY]) == "undefined" || (indexX == positionX && indexY == positionY)) {
                                isPathClean = true;
                            }
                            else {
                                isPathClean = false;
                                break;
                            }
                            indexY++;
                        }
                    }

                } else if (self.posX > positionX && self.posY < positionY) {
                    var minX = positionX;
                    var maxX = self.posX;
                    var minY = self.posY;
                    var maxY = positionY;

                    if (maxY - minY == maxX - minX) {
                        var indexY = maxY;
                        for (var indexX = minX; indexX < maxX; indexX++) {

                            if (typeof (board[indexX][indexY]) == "undefined" || (indexX == positionX && indexY == positionY)) {
                                isPathClean = true;
                            }
                            else {
                                isPathClean = false;
                                break;
                            }
                            indexY--;
                        }
                    }

                } else if (self.posX < positionX && self.posY < positionY) {

                    var minX = self.posX;
                    var maxX = positionX;
                    var minY = self.posY;
                    var maxY = positionY;

                    if (maxY - minY == maxX - minX) {
                        var indexY = minY + 1;
                        for (var indexX = minX + 1; indexX <= maxX; indexX++) {

                            if (typeof (board[indexX][indexY]) == "undefined" || (indexX == positionX && indexY == positionY)) {
                                isPathClean = true;
                            }
                            else {
                                isPathClean = false;
                                break;
                            }
                            indexY++;
                        }
                    }
                } else if (self.posX < positionX && self.posY > positionY) {
                    var minX = self.posX;
                    var maxX = positionX;
                    var minY = positionY;
                    var maxY = self.posY;

                    if (maxY - minY == maxX - minX) {
                        var indexY = maxY - 1;
                        for (var indexX = minX + 1; indexX <= maxX; indexX++) {

                            if (typeof (board[indexX][indexY]) == "undefined" || (indexX == positionX && indexY == positionY)) {
                                isPathClean = true;
                            }
                            else {
                                isPathClean = false;
                                break;
                            }
                            indexY--;
                        }
                    }
                }
            }

            if (isPathClean) {
                isValid = isPathClear(board, self, positionX, positionY);
            }

            return isValid;
        }
    }

    function King(color, posX, posY) {
        var that = this;
        Piece.call(this, color, posX, posY);

        this.visualize = function () {
            if (color == "white") {
                return "<span>&#9812</span>";
            }
            else if (color == "black") {
                return "<span>&#9818</span>";
            }
        }

        this.validate = function (board, positionX, positionY) {
            var isValid = false;
            var isNearEnemyKing = false;

            isNearEnemyKing = this.isNearEnemyKing({
                posX: positionX,
                posY: positionY,
            })

            if (!isNearEnemyKing) {

                for (var i = -1; i <= 1; i++) {
                    for (var j = -1; j <= 1; j++) {
                        if ((that.posX == positionX + i && that.posY == positionY) + j) {
                            if (typeof (board[positionX][positionY]) == "undefined") {
                                isValid = true;
                            }
                            else if (that.color != board[positionX][positionY].color) {
                                Capture(positionX, positionY, self);
                                isValid = true;
                            }
                        }
                    }
                }
            }

            return isValid;
        }

        this.modifyKings = function (positionX, positionY) {
            if (that.color == 'white') {
                kings[1] = new King("white", positionX, positionY);
            } else if (that.color == 'black') {
                kings[0] = new King("black", positionX, positionY);
            }
        }

        this.isNearEnemyKing = function (positionX, positionY) {

            var kingPosX = 0;
            var kingPosY = 0;

            var isNearKing = false;

            if (this.color == 'white') {
                kingPosX = kings[0].posX;
                kingPosY = kings[0].posY;
            } else if (this.color == 'black') {
                kingPosX = kings[1].posX;
                kingPosY = kings[1].posY;
            }

            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                    if (positionX == kingPosX + i && positionY == kingPosY + j) {
                        isNearKing = true;
                    }
                }
                return isNearKing;
            }

            return isNearKing;
        }
    }

    function Pawn(color, posX, posY) {
        var self = this;
        Piece.call(this, color, posX, posY);

        this.visualize = function () {
            if (color == "white") {
                return "<span>&#9817</span>";
            }
            else if (color == "black") {
                return "<span>&#9823</span>";
            }
        }

        this.validate = function (board, positionX, positionY) {
            var isValid = false;
            var moveDirection = 1;
            var startingRow = 6;

            if (self.color == 'black') {
                moveDirection = -1;
                startingRow = 1;
            }

            if (self.posX == positionX + moveDirection && self.posY == positionY) {
                if (typeof (board[positionX][positionY]) == "undefined") {
                    isValid = true;
                }
            }
            else if (self.posX == positionX + moveDirection && self.posY == positionY - 1) {
                isValid = validateNonEmptyPos(board, positionX, positionY);
                //coupling
                if (isValid) {
                    Capture(positionX, positionY, self);
                }
            }
            else if (self.posX == positionX + moveDirection && self.posY == positionY + 1) {
                isValid = validateNonEmptyPos(board, positionX, positionY);
                //coupling
                if (isValid) {
                    Capture(positionX, positionY, self);
                }
            }
            else if (self.posX == positionX + moveDirection * 2 && self.posY == positionY && self.posX == startingRow) {
                if (typeof (board[positionX][positionY]) == "undefined") {
                    isValid = true;
                }
            }

            return isValid;
        }

        //private function for validation
        function validateNonEmptyPos(board, positionX, positionY) {
            if (typeof (board[positionX][positionY]) == "undefined") {
                return false;
            } else if (self.color != board[positionX][positionY].color) {
                return true;
            }
        }
    }

    function makeMove(newPosX, newPosY, piece, pieces) {
        pieces[piece.posX][piece.posY] = undefined;

        switch (piece.constructor.name) {
            case "Pawn": pieces[newPosX][newPosY] = new Pawn(piece.color, newPosX, newPosY);
                break;
            case "Rook": pieces[newPosX][newPosY] = new Rook(piece.color, newPosX, newPosY);
                break;
            case "Knight": pieces[newPosX][newPosY] = new Knight(piece.color, newPosX, newPosY);
                break;
            case "Bishop": pieces[newPosX][newPosY] = new Bishop(piece.color, newPosX, newPosY);
                break;
            case "Queen": pieces[newPosX][newPosY] = new Queen(piece.color, newPosX, newPosY);
                break;
            case "King": pieces[newPosX][newPosY] = new King(piece.color, newPosX, newPosY);
                break;
            default:
                break;
        }

        registerMove(piece.posX, piece.posY, pieces[newPosX][newPosY]);
    }

    function isPathClear(board, self, positionX, positionY) {
        var isValid = false;
        if (typeof (board[positionX][positionY]) == "undefined") {
            isValid = true;
        } else if (self.color != board[positionX][positionY].color) {
            Capture(positionX, positionY, self);
            isValid = true;
        }
        return isValid;
    }

    function Capture(positionX, positionY, piece) {
        if (piece.color == 'black') {
            piecesLeft[1]--;
        } else if (piece.color == 'white') {
            piecesLeft[0]--;
        }

        var enemyPeace = $("#r" + (positionX + 1) + "c" + (positionY + 1));
        enemyPeace.empty();

        setScore(piece, pieces[positionX][positionY]);
    }

    return {
        generatePieces: function () {
            return new InitailPiecesGenerator().init();
        },
        makeMove: makeMove
    }
})();