interface IPerson {
  name: string;
  age: number;
  greet(): void;
}
class Person implements IPerson {
  constructor(public name: string, public age: number) { }
  public greet(): void {
    console.log(`Hello! My name is ${this.name} and Im ${this.age}`);
  }
}
const hipster = new Person('shakeAndBake', 100);
hipster.greet();