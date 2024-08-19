// Primitive values
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothin: undefined = undefined;
// Build objects
const now: Date = new Date();
// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [2, 4.05, 3.40, 5];
let truths: boolean[] = [true, false, true];
// Classes
class Car {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let car: Car = new Car("Lamborgini");
// Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
};
// Functions
const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};
// When to use annotations
// 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
console.log(coordinates.x);
console.log(coordinates.y);
// 2) When we declare a variable on
// one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
// 3) Variable whose type cannot be inferred correctly
let nums = [-10, -1, 12];
let numsAboveZero: boolean | number = false;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numsAboveZero = nums[i];
  }
}