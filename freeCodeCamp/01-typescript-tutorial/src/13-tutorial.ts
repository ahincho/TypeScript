// Classes
class Book {
  public readonly title: string;
  public author: string;
  // checkedOut: boolean;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    // this.checkedOut = false;
  }
  public checkOut() {
    this.checkedOut = true;
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}
const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork);
// deepWork.checkedOut = 'Hello world'; Error
console.log(deepWork.title);
deepWork.checkOut();
console.log(deepWork);
console.log(deepWork.isCheckedOut());
// Shortcuts
class MyBook {
  private checkedOut: boolean = false;
  constructor (
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}
  public getSomeValue(): number {
    return this.someValue;
  }
  get info() {
    return `${this.title} by ${this.author}`;
  }
  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
}
const another = new MyBook('Deep Work', 'Cal Newport', 45);
console.log(another.getSomeValue());
console.log(another.info);
// another.checkOut = 'Hello';
another.checkOut = true;
console.log(another);
export { };