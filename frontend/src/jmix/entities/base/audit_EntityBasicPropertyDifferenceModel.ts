import { EntityPropertyDifferenceModel } from "./audit_EntityPropertyDifferenceModel";
export class EntityBasicPropertyDifferenceModel extends EntityPropertyDifferenceModel {
  static NAME = "audit_EntityBasicPropertyDifferenceModel";
}
export type EntityBasicPropertyDifferenceModelViewName =
  | "_base"
  | "_instance_name"
  | "_local";
export type EntityBasicPropertyDifferenceModelView = never;
