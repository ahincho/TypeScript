;
var oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Vehicle[".concat(this.name, ", ").concat(this.year, ", ").concat(this.broken, ", ").concat(this.broken, "]");
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
var printReport = function (reportable) {
    console.log(reportable.summary());
};
printReport(oldCivic);
var drink = {
    color: 'Brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "Drink[".concat(this.color, ", ").concat(this.carbonated, ", ").concat(this.sugar, "]");
    }
};
printReport(drink);
