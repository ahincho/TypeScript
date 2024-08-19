var carMakers = ['Ford', 'Toyota', 'Chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['F150'],
    ['Corolla'],
    ['Camaro']
];
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
// carMakers.push(100);
// Help with 'map'
carMakers.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
var importantDates = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100);
console.log(importantDates);
