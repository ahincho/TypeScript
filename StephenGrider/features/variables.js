// Primitive values
var apples = 5;
var speed = 'fast';
var hasName = true;
var nothingMuch = null;
var nothin = undefined;
// Build objects
var now = new Date();
// Arrays
var colors = ['red', 'green', 'blue'];
var numbers = [2, 4.05, 3.40, 5];
var truths = [true, false, true];
// Classes
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var car = new Car("Lamborgini");
// Object literal
var point = {
    x: 10,
    y: 20
};
// Functions
var logNumber = function (num) {
    console.log(num);
};
// When to use annotations
// 1) Function that returns 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
console.log(coordinates.x);
console.log(coordinates.y);
