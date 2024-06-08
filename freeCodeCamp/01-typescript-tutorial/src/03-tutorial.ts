// Arrays and multiples types
let temperatures: (string | number)[] = [34, '36°C', '154°F', 273.16];
// Objects in JavaScript and TypeScript
let car = {
  brand: 'Toyota',
  year: 2020
};
console.log(car);
let carSchema: {
  brand: string,
  year: number
} = { brand: 'Toyota', year: 2020 };
console.log(carSchema);
let laptop: {
  brand: string,
  year: number
} = { brand: 'Dell', year: 2024 };
// Functions in TypeScript
function sayHi(name: string) {
  console.log(`Hello ${name}!`);
}
sayHi('Angel');
function calculateDiscount(price: number, discount: number): number {
  return price * discount;
}
console.log(calculateDiscount(250, 0.15));
const randomNames: string[] = ['Jane', 'John', 'Jim', 'Jill'];
function isNameInList(name: string, list: string[]) {
  if (list.includes(name)) {
    console.log(`${name} is in the list`);
  } else {
    console.log(`${name} is not in the list`);
  }
}
isNameInList('John', randomNames);
isNameInList('Angel', randomNames);
function applyDiscount(price: number, discount?: number): number {
  return price * (1 - (discount || 0));
}
console.log(applyDiscount(100, 0.30));
console.log(applyDiscount(100));
function applyPenalty(price: number, discount: number = 0): number {
  return price * (1 - discount);
}
console.log(applyPenalty(100));
console.log(applyPenalty(100, 0.25));
// Functional programming in TypeScript
function sum(message: String, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  });
  return `${message}: ${total}`;
}
let result = sum('The total is', 1, 2, 3, 4, 5);
console.log(result);
// Functions that has no return
function logMessage(message: string): void {
  console.log(message);
}
logMessage('Hello from TypeScript');
// Union types and functions
function processInput(items: (string | number)[]): void {
  items.map((item) => {
    if (typeof(item) === 'number') {
      console.log(item * 2);
    } else {
      console.log(item.toUpperCase());
    }
  });
}
processInput(['hello', 1, 'world', 2, 12, 'typescript']);
function createEmployee({ id }: { id: number}): { id: number, isActive: boolean } {
  return { id: id, isActive: id % 2 === 0 };
}
const employee = createEmployee({ id: 1 });
console.log(employee);
const anotherEmployee = createEmployee({ id: 2 });
console.log(anotherEmployee);
// Inference
function greetings(student: { id: number, name: string }): void {
  console.log(`${student.id}. Welcome to the course ${student.name.toUpperCase()}`);
}
const student = {
  id: 5,
  name: 'Angel'
};
greetings(student);
function processData(input: string | number, config: { reverse: boolean } = { reverse: false}): string | number {
  if (typeof(input) === 'number') {
    return input ** 2;
  } else {
    if (config) {
      return input.split('').reverse().join('').toUpperCase();
    } else {
      return input.toUpperCase();
    }
  }
}
console.log(processData('Angel'));
console.log(processData('Eduardo', { reverse: true }));
console.log(processData(12));