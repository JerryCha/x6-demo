import { Entity } from "./Entity";

enum CARDINALITY {
  ZERO_OR_ONE,
  ZERO_OR_MANY,
  ONE,
  ONE_OR_MANY,
  MANY,
}

export class Association {
  from: Entity;
  fromCardinality: CARDINALITY;
  to: Entity;
  toCardinality: CARDINALITY;
  label: string;

  constructor(
    label: string,
    from: Entity,
    fromCardinality: CARDINALITY,
    to: Entity,
    toCardinality: CARDINALITY
  ) {
    this.from = from;
    this.fromCardinality = fromCardinality;
    this.to = to;
    this.toCardinality = toCardinality;
    this.label = label;
  }
}
