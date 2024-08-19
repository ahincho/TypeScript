const drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 40
};
// Type alias
type Drink = [string, boolean, number]
const pepsi: Drink = ['Brown', true, 40];
// pepsi[0] = 40;
const sprite: Drink = ['Clear', true, 40];
const tea: Drink = ['Brown', false, 0];
const drinks: Drink[] = [pepsi, sprite, tea];
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsePower: 400,
  weight: 3354
};
console.log(drinks);
console.log(carSpecs);
console.log(carStats);