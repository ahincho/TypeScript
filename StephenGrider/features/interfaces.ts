interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
};
const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Vehicle[${this.name}, ${this.year}, ${this.broken}, ${this.broken}]`;
  }
};
const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.summary());
};
printVehicle(oldCivic);
interface Reportable {
  summary(): string;
}
const printReport = (reportable: Reportable) => {
  console.log(reportable.summary());
};
printReport(oldCivic);
const drink = {
  color: 'Brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Drink[${this.color}, ${this.carbonated}, ${this.sugar}]`;
  }
};
printReport(drink);