export class EntityPropertyDifferenceModel {
  static NAME = "audit_EntityPropertyDifferenceModel";
  id?: string;
  propertyCaption?: string | null;
  label?: string | null;
  metaClassName?: string | null;
  propertyName?: string | null;
  messageTools?: any | null;
  instanceNameProvider?: any | null;
  messages?: any | null;
  parentProperty?: EntityPropertyDifferenceModel | null;
  name?: string | null;
  beforeString?: string | null;
  afterString?: string | null;
  beforeCaption?: string | null;
  afterCaption?: string | null;
  itemState?: any | null;
}
export type EntityPropertyDifferenceModelViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type EntityPropertyDifferenceModelView = never;
