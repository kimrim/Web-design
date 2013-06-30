/// <reference path="../scripts/snake.js" />

module("SnakePiece.init");
test("should set correct values",   
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    equal(piece.position, position)
    equal(piece.size, 15);
    equal(piece.speed, speed);
    equal(piece.direction, dir);
  });

module("SnakePiece.move");
test("When direction is 0, decrease x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 0;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.x - speed;
    deepEqual(piece.position, position);
  });
test("When  direction is 1, decrease update y",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 1;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.y - speed;
    deepEqual(piece.position, position);
  });
test("When  direction is 2, increase x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 2;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.x + speed;
    deepEqual(piece.position, position);
  });
test("When  direction is 3, should increase x",
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, dir = 3;
    var piece = new snakeGame.SnakePiece(position, size, speed, dir);
    piece.move();
    position.y + speed;
    deepEqual(piece.position, position);
  });

module("SnakePiece.changeDirection");
test("When direction is top and new direction is right, should change directions",
    function () {
        var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
        var piece = new snakeGame.SnakePiece(position, size, speed, dir);
        piece.changeDirection(3);        
        deepEqual(piece.direction, 3);
    });
test("When direction is left and new direction is right, should NOT change directions",
    function () {
        var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 1;
        var piece = new snakeGame.SnakePiece(position, size, speed, dir);
        piece.changeDirection(3);
        deepEqual(piece.direction, 1);
    });
test("When direction is down and new direction is up, should NOT change directions",
    function () {
        var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 2;
        var piece = new snakeGame.SnakePiece(position, size, speed, dir);
        piece.changeDirection(0);
        deepEqual(piece.direction, 2);
    });