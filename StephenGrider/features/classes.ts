class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('Beep');
  }
}
const vehicle = new Vehicle('Orange');
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Vroom');
  }
  public startDrivingProcess(): void {
    this.drive();
  }
  public startHonkProcess(): void {
    this.honk();
  }
}
const car = new Car(4, 'White');
car.startDrivingProcess();
car.startHonkProcess();