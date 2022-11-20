type PropertyConstructorArgs = {
  name: string;
  label: string;
  dataType: string;
  notNull?: boolean;
};

export class Property {
  notNull: boolean;
  name: string;
  label: string;
  dataType: string; // TODO: replace with enum

  constructor({
    name,
    label,
    dataType,
    notNull = true,
  }: PropertyConstructorArgs) {
    this.notNull = notNull;
    this.name = name;
    this.label = label;
    this.dataType = dataType;
  }
}
