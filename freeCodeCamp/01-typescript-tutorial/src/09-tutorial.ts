import student, { sayHello, person, type Student } from "./08-tutorial";

sayHello('TypeScript');
console.log(student);
console.log(person);
const anotherStudent: Student = {
  name: 'Angel',
  age: 20
}
console.log(anotherStudent);
type ValueType = string | number | boolean;
let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;
export function checkValue(valueType: ValueType) {
  if (typeof valueType === 'string') {
    console.log(valueType.toLowerCase());
    return valueType;
  } else if (typeof valueType === 'number') {
    console.log(valueType.toFixed(2));
    return valueType;
  } else if (typeof valueType === 'boolean') {
    console.log(`Boolean: ${valueType}`);
    return valueType;
  }
}
checkValue(value);
// Equality Narrowing
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;
const dog: Dog = { type: 'dog', name: 'Fido', bark: () => { console.log('Woof') } }
const cat: Cat = { type: 'cat', name: 'Michi', meow: () => { console.log('Miau') } }
function makeSoundSimple(animal: Animal) {
  if (animal.type === 'dog') {
    animal.bark();
  } else if (animal.type === 'cat') {
    animal.meow();
  } else {
    throw new Error('Animal unexpected');
  }
}
makeSoundSimple(dog);
makeSoundSimple(cat);
function makeSound(animal: Animal) {
  if ('bark' in animal) {
    animal.bark();
  } else if ('meow' in animal) {
    animal.meow();
  } else {
    throw new Error('Animal unexpected');
  }
}
makeSound(cat);
makeSound(dog);
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log('No string provided');
  }
}
printLength('Hello');
printLength('');
printLength(null);
printLength(undefined);
function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}
const year = checkInput(new Date());
const bestYear = checkInput('2020-05-05');
console.log(year);
console.log(bestYear);
// Type checking
type StudentType = {
  name: string;
  study: () => void;
}
type User = {
  name: string;
  login: () => void;
}
type Person = StudentType | User;
const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'John', study: () => console.log('Studying') }
    : { name: 'Mary', login: () => console.log('Logging in') };
}
const getRandom = randomPerson();
function isStudent(person: Person): person is StudentType {
  return (person as StudentType).study !== undefined;
}
if (isStudent(getRandom)) {
  getRandom.study();
} else {
  getRandom.login();
}