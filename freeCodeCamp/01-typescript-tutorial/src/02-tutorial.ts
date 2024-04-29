// Multiple types
let tax: number | string = 10;
tax = 100;
tax = '$10';
let requestStatus: 'pending' | 'sucess' | 'error' = 'pending';
requestStatus = 'error';
// requestStatus = 'random'; Enum error
console.log(`Request status: ${requestStatus}`);

// Type inference and any typo
let notSure: any = 4;
notSure = 'maybe a string!';
notSure = false;

// Arrays
const books: string[] = ['1984', 'Brave New World', 'Fahrenheit 451'];
let found: string | undefined;
for (let book of books) {
  if (book === '1985') {
    found = book;
    break;
  }
}
console.log(found);
console.log(found?.length);

// Typos errors
let discount: number | string = 20;
discount = '20%';
// discount = true;
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
// orderStatus = 'undefined';

// Arrays
let prices: number[] = [100, 75, 42];
// prices.push('Hello'); Typo error on array
let fruits: string[] = ['apple', 'orange'];
fruits.push('banana');
// fruits.push(240); Typo error on array
// let randoms: [] = ['Hello']; Syntax error by empty array
let randoms: any[] = ['Hello', 2, true, 3.14, [1, 2]];
let emptyValues = ['Peter', 1, 2.0, false]; // TypeScript infers this typo as any[]
let names = ['Angel', 'Eduardo', 'Susan']; // TypeScript infers this typo as string[]