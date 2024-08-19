import { faker } from "@faker-js/faker";
import { Markable } from "./markable";

export class Company implements Markable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
  getMarkerContent(): string {
    return `
      <div>
        <h1>Company: ${this.name}</h1>
        <h3>Catch: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}