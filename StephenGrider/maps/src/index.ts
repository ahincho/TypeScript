import { Loader } from "google-maps";
import { CustomMap } from "./custom.map";
import { User } from "./user";
import { Company } from "./company";

const customMap = new CustomMap('map');

const user = new User();
const company = new Company();

customMap.addMarker(company);
customMap.addMarker(user);
