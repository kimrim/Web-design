var movingShapes = (function () {
    var MAX_WIDTH = 800;
    var MAX_HEIGHT = 600;
    var OFFSET = 20;
    var START_MARGIN = 20;
    var circleCenterX = MAX_WIDTH / 2;
    var circleCenterY = MAX_HEIGHT / 2;
    var RADIUS = 200;
    

    function add(elementType) {
        var div = createElement(elementType);
        document.body.appendChild(div);

        //assign random timers  to each element
        var timer = generateRandom(30, 100);      

        if (elementType === "rect") {
            addRectangularMotion(div, timer);
        }
        else if (elementType === "ellipse") {
            addCircularMotion(div, timer);
        }
    }    

    function createElement(elementType) {
        var div = document.createElement("div");
        div.className = elementType;
        div.style.background = setColor();
        div.style.color = setColor();
        div.innerHTML = "Div";
        div.style.border = "2px solid" + " " + setColor();
        div.style.position = "absolute";
        div.style.top = START_MARGIN + "px";
        div.style.left = START_MARGIN + "px";
        
        return div;
    }

    function addRectangularMotion(divElement, timerInterval) {
        var posX = START_MARGIN;
        var posY = START_MARGIN;
        
        setInterval(function(){            

            //move right
            if (posX < MAX_WIDTH && posY == START_MARGIN) {
                posX += OFFSET;
            }
            //move down
            else if (posX == MAX_WIDTH && posY < MAX_HEIGHT) {
                posY += OFFSET;
            }
            //move left
            else if (posX > START_MARGIN && posY == MAX_HEIGHT) {
                posX -= OFFSET;
            }            
            //move up
            else if (posX == START_MARGIN && posY > START_MARGIN) {
                posY -= OFFSET;
            }
            
            divElement.style.left = posX + "px";
            divElement.style.top = posY + "px";
        }, timerInterval);
        
    }

    function addCircularMotion(divElement, timerInterval) {

        var currentAngle = OFFSET;

        setInterval(function () {
            currentAngle += OFFSET;
            divElement.style.left = setCoordXOnCircle(circleCenterX, RADIUS, currentAngle);
            divElement.style.top = setCoordYOnCircle(circleCenterY, RADIUS, currentAngle);
        }, timerInterval);

        function setCoordXOnCircle(centerX, radius, angleInDegrees) {
            var positionTopX = centerX + radius * Math.cos(angleInDegrees * Math.PI / 180);
            return positionTopX + "px";
        };

        function setCoordYOnCircle(centerY, radius, angleInDegrees) {
            var positionTopY = centerY + radius * Math.sin(angleInDegrees * Math.PI / 180);
            return positionTopY + "px";
        };
    }

    function setColor() {
        var color = "rgb(";
        color += generateRandom(1, 255) + ",";
        color += generateRandom(1, 255) + ",";
        color += generateRandom(1, 255) + ")";

        return color;
    };

    function generateRandom(start, end) {
        return Math.floor(Math.random() * end + start);
    };

    return {
        add: add
    }
})();