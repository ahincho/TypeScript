// Types
type User = { id: number; name: string; isActive: boolean };
const john: User = { id: 1, name: 'John', isActive: true };
const susan: User = { id: 2, name: 'Susan', isActive: false };
function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}!`);
  return user;
}
type StringOrNumber = string | number;
let value: StringOrNumber;
value = 'Hello';
value = 123;
type Theme = 'light' | 'dark';
let theme: Theme;
theme = 'dark';
theme = 'light';
function setTheme(userTheme: Theme): void {
  theme = userTheme;
  console.log(theme);
}
setTheme('dark');
// Employee Type
type Employee = { id: number, name: string, department: string };
// Manager Type
type Manager = { id: number, name: string, employees: Employee[] };
// Staff Type
type Staff = Employee | Manager;
function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(`${staff.name} is the manager of ${staff.employees.length} people`);
  } else {
    console.log(`${staff.name} is an employee in the ${staff.department} department`)
  }
}
let angel: Employee = { id: 1, name: 'Angel', department: 'IT' };
let doe: Employee = { id: 3, name: 'Doe', department: 'HR' };
let eduardo: Manager = { id: 2, name: 'Eduardo', employees: [angel, doe] };
printStaffDetails(angel);
printStaffDetails(doe);
printStaffDetails(eduardo);
type Book = { id: number; name: string; price: number };
type BookOnSale = Book & { discount: number };
const book1: Book = {
  id: 1,
  name: 'How to cook a dragon',
  price: 15.99
};
console.log(book1);
const book2: Book = {
  id: 2,
  name: 'The secret life of unicorns',
  price: 25.99
};
console.log(book2);
const book3: BookOnSale = {
  id: 3,
  name: 'Gnomes vs Globins',
  price: 13.49,
  discount: 0.15
}
console.log(book3);
const propName = 'age';
type Animal = {
  [propName]: number;
}
let tiger = { [propName]: 5 };
// Interfaces
interface RealBook {
  readonly isbn: number;
  title: string;
  author: string;
  genre: string;
}
const deepWork: RealBook = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self help'
}
console.log(deepWork);