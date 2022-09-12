import { HairColor } from "./Enums";

export interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

export interface UserInterface {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}
