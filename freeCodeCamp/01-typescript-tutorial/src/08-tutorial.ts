// import { something } from './07-tutorial';

export const name = 'Name';
console.log(name);
// console.log(something);
export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}
export let person = 'Susan';
export type Student = {
  name: string;
  age: number;
}
const student: Student = {
  name: 'Peter',
  age: 24
}
export default student;