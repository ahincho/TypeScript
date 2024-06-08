// Tuples and Enums
let people: [string, number] = ['John', 25];
people.push('Angel');
people.push(20);
console.log(people);
let date: readonly [number, number, number] = [5, 5, 2024];
console.log(date);
// date.push(43); We can not use push() anymore
// console.log(date);
function getPerson(): [string, number] {
  return ['John', 25];
}
let randomPerson = getPerson();
console.log(randomPerson);
let mary: [string, number?] = ['Mary'];
// Enums
enum ServerResponseStatus {
  SUCESS = 200,
  ERROR = 500
}
console.log(ServerResponseStatus);
interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}
function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.SUCESS,
    data: ['Sucess', '200', 'OK', 'First item', 'Second item', 'Third item']
  };
}
const response: ServerResponse = getServerResponse();
console.log(response);
Object.values(ServerResponseStatus).forEach((value) => {
  console.log(value);
});
// Reverse Mapping
enum NumericEnum {
  Number = 1
}
enum StringEnum {
  Member = 'Value'
}
let numeric: NumericEnum = 1; // This is allowed
console.log(numeric); // 1
// let string: StringEnum = 'Value'; // This is not allowed
let string: StringEnum = StringEnum.Member; // This is allowed
enum UserRole {
  Admin,
  Manager,
  Employee
}
type UserType = {
  id: number,
  name: string,
  role: UserRole,
  contact: [string, string]
}
function createUser(user: UserType): UserType {
  return user;
}
const user: UserType = createUser({
  id: 1,
  name: 'John',
  role: UserRole.Admin,
  contact: ['john@example.com', '000-0000-000']
})
console.log(user);
// Type Inference
let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length;
type Bird = {
  name: string;
}
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';
let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);
let bird = birdObject as Bird;
let dog = dogObject as Bird;
console.log(bird.name);
console.log(dog.name);
// Enums
enum Status {
  Pending = 'pending',
  Decline = 'decline'
}
type UserExample = {
  name: string;
  status: Status;
}
const statusValue = 'pending';
const userExample: UserExample = {name: 'Angel', status: statusValue as Status};
console.log(userExample);