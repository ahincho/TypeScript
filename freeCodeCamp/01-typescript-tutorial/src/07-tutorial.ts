let unknownValue: unknown;
unknownValue = 'Hello world';
unknownValue = [1, 2, 3];
unknownValue = 321.123;
if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2);
}
function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('There was a error')
  } else {
    throw 'Some error';
  }
}
try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
// let neverValue: never = 0;
type BrowserTheme = 'light' | 'dark';
function checkTheme(browserTheme: BrowserTheme): void {
  if (browserTheme === 'light') {
    console.log('Light theme');
    return;
  }
  if (browserTheme === 'dark') {
    console.log('Dark theme');
  }
  browserTheme;
}
enum Color {
  Red,
  Blue,
  Green
}
function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue';
    case Color.Green:
      return 'Green';
    default:
      // At build time
      let unexpected: never = color;
      // At run time
      throw new Error(`Unexpected color value: ${color}`);
  }
}
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
export const something = 'Something';