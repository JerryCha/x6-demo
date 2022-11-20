import { Property } from "./Property";

export class Entity {
  properties: Property[];
  name: string;
  label: string;

  constructor(name: string, label: string) {
    this.properties = [];
    this.name = name;
    this.label = label;
  }

  getPrimaryKeys() {}
}
