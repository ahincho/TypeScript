// Vanilla JavaScript
console.log("Hello world from TypeScript");

// Interfaces
interface someValue {
  name: string;
  id: number
};

// Objects
let someObject: someValue = {
  name: 'Random',
  id: 123
};
console.log(someObject);

// Strings
let awesomeName: string = 'shakeAndBake';
awesomeName = 'somethingElse';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// Numbers
let amount: number = 20;
amount = 12 - 1;

// Booleans
let isAwesome: boolean = false;
isAwesome = true;

// Conditional
if (isAwesome) {
  console.log("This course is awesome!");
}

// Loops
for (let i: number = 0 ; i < 10 ; i++) {
  console.log(i);
}
