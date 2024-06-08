// Generics
let array1: string[] = ['Apple', 'Banana', 'Mango'];
let array2: number[] = [1, 2, 3, 4, 5];
let array3: boolean[] = [true, false, true, false];
function printLength<T>(array: Array<T>): number {
  return array.length;
}
console.log(printLength(array1));
console.log(printLength(array2));
console.log(printLength(array3));
function genericFunction<T>(arg: T): T {
  return arg;
}
console.log(genericFunction(1));
console.log(genericFunction('abc'));
console.log(genericFunction(true));
console.log(genericFunction(['a', 4, true]));
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}
let strArray = createArray<string>(10, 'Hello');
let numberArray = createArray<number>(15, 20);
let booleanArray = createArray<boolean>(20, false);
console.log(strArray);
console.log(numberArray);
console.log(booleanArray);
// Set of Generics
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}
let aPair = pair<number, string>(123, 'Hello');
console.log(aPair);
type Product = {
  name: string;
  price: number;
}
type Student = {
  name: string;
  age: number;
}
const product = { name: 'Pencil', price: 1.50 };
const myStudent = { name: 'Angel', age: 20 };
function printName<T extends Student | Product>(input: T): void {
  console.log(input.name);
}
printName(product);
printName(myStudent);
// Generics from an Object or JSON
function printNameAlt<T extends { name: string }>(input: T): void {
  console.log(input.name);
}
printNameAlt(product);
printNameAlt(myStudent);
interface StoreData<T> {
  data: T[];
}
const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4 ,5]
}
const storeRandom: StoreData<any> = {
  data: ['random', 123, true]
}