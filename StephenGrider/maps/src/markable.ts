export interface Markable {
  location: {
    lat: number;
    lng: number;
  }
  getMarkerContent(): string;
}