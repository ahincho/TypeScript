// Interfaces
interface RealBook {
  // Properties
  readonly isbn: number;
  title: string;
  author: string;
  genre: string;
  // Methods
  printInfo(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}
const deepWorkBook: RealBook = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self help',
  printInfo(): void {
    console.log(`${this.title} by ${this.author}`)
  },
  printTitle(message: string): string {
    return `${this.title}: ${message}`
  },
  printSomething: (someValue: number) => {
    console.log(someValue);
    return someValue;
  }
}
console.log(deepWorkBook);
deepWorkBook.printInfo();
const result1: string = deepWorkBook.printTitle("Comming soon!");
console.log(result1);
deepWorkBook.printSomething(123);
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(ram: number): number;
}
const computer: Computer = {
  id: 1,
  brand: 'Intel',
  ram: 16,
  upgradeRam(ram: number): number {
    return ram;
  }
}
console.log(computer);
console.log(`Upgrade ram to ${computer.upgradeRam(32)}gbs`);
interface Person {
  name: string;
  getDetails(): string;
}
interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}
interface Person {
  age: number;
}
const person: Person = {
  name: 'John',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};
interface MyEmployee extends Person {
  employeeId: number;
}
console.log(person.getDetails());
const jane: MyEmployee = {
  name: 'Jane',
  age: 28,
  employeeId: 123,
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Id: ${this.employeeId}`;
  }
};
console.log(jane.getDetails());
interface MyManager extends Person, DogOwner {
  managePeople(): void;
}
const manager: MyManager = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails(): string {
    return `Name: ${this.dogName}`;
  },
  managePeople(): void {
    console.log('Managing people!');
  }
}
console.log(manager.getDetails());
console.log(manager.getDogDetails());
manager.managePeople();