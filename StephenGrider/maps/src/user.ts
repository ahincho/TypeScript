import { faker } from '@faker-js/faker';
import { Markable } from './markable';

export class User implements Markable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
  getMarkerContent(): string {
    return `
      <div>
        <h1>User: ${this.name}</h1>
      </div>
    `;
  }
}